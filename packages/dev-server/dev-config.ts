/* eslint-disable no-console */
import { AdminUiPlugin } from '@vendure/admin-ui-plugin';
import { AssetServerPlugin } from '@vendure/asset-server-plugin';
import { ADMIN_API_PATH, API_PORT, SHOP_API_PATH } from '@vendure/common/lib/shared-constants';
import {
    Asset,
    DefaultJobQueuePlugin,
    DefaultLogger,
    DefaultSearchPlugin,
    dummyPaymentHandler,
    LanguageCode,
    LogLevel,
    VendureConfig,
} from '@vendure/core';
import { ElasticsearchPlugin } from '@vendure/elasticsearch-plugin';
import { defaultEmailHandlers, EmailPlugin } from '@vendure/email-plugin';
import { BullMQJobQueuePlugin } from '@vendure/job-queue-plugin/package/bullmq';
import 'dotenv/config';
import { compileUiExtensions } from '@vendure/ui-devkit/compiler';
import path from 'path';
import { DataSourceOptions } from 'typeorm';

import { MultivendorPlugin } from './example-plugins/multivendor-plugin/multivendor.plugin';
import { Performer } from './plugins/performer/entities/performer.entity';
import { PerformerPlugin } from './plugins/performer/performer-plugin';

/**
 * Config settings used during development
 */
export const devConfig: VendureConfig = {
    apiOptions: {
        port: API_PORT,
        adminApiPath: ADMIN_API_PATH,
        adminApiPlayground: {
            settings: {
                'request.credentials': 'include',
            } as any,
        },
        adminApiDebug: true,
        shopApiPath: SHOP_API_PATH,
        shopApiPlayground: {
            settings: {
                'request.credentials': 'include',
            } as any,
        },
        shopApiDebug: true,
    },
    authOptions: {
        disableAuth: true,
        tokenMethod: ['bearer', 'cookie'] as const,
        requireVerification: true,
        customPermissions: [],
        cookieOptions: {
            secret: 'abc',
        },
    },
    dbConnectionOptions: {
        synchronize: false,
        logging: false,
        migrations: [path.join(__dirname, 'migrations/*.ts')],
        ...getDbConfig(),
    },
    paymentOptions: {
        paymentMethodHandlers: [dummyPaymentHandler],
    },
    customFields: {
        Product: [
            {
                name: 'productType',
                type: 'string',
                label: [
                    {
                        languageCode: LanguageCode.en,
                        value: 'Product Type',
                    },
                ],
                ui: {
                    component: 'select-form-input',
                    options: [
                        { value: 'event', label: [{ languageCode: LanguageCode.en, value: 'Event' }] },
                        { value: 'booking', label: [{ languageCode: LanguageCode.en, value: 'Booking' }] },
                    ],
                },
            },
            {
                name: 'dateTime',
                type: 'datetime',
                label: [
                    {
                        languageCode: LanguageCode.en,
                        value: 'Date and Time',
                    },
                ],
                ui: {
                    component: 'date-form-input',
                },
            },
            {
                name: 'venue',
                type: 'string',
                label: [
                    {
                        languageCode: LanguageCode.en,
                        value: 'Venue',
                    },
                ],
                ui: {
                    component: 'text-form-input',
                },
            },
            {
                name: 'performers',
                type: 'relation',
                list: true,
                public: true,
                entity: Performer,
                nullable: true,
                label: [
                    {
                        languageCode: LanguageCode.en,
                        value: 'Performing Artists and Bands',
                    },
                ],
                ui: {
                    component: 'relation-form-input',
                },
            },
            {
                name: 'featured',
                type: 'boolean',
                label: [
                    {
                        languageCode: LanguageCode.en,
                        value: 'Set as "Featured"',
                    },
                ],
                ui: {
                    component: 'checkbox-form-input',
                },
            },
        ],
    },
    logger: new DefaultLogger({ level: LogLevel.Verbose }),
    importExportOptions: {
        importAssetsDir: path.join(__dirname, 'import-assets'),
    },
    plugins: [
        // MultivendorPlugin.init({
        //     platformFeePercent: 10,
        //     platformFeeSKU: 'FEE',
        // }),
        AssetServerPlugin.init({
            route: 'assets',
            assetUploadDir: path.join(__dirname, 'assets'),
        }),
        DefaultSearchPlugin.init({ bufferUpdates: false, indexStockStatus: false }),
        // BullMQJobQueuePlugin.init({}),
        // DefaultJobQueuePlugin.init({}),
        // JobQueueTestPlugin.init({ queueCount: 10 }),
        // ElasticsearchPlugin.init({
        //     host: 'http://localhost',
        //     port: 9200,
        //     bufferUpdates: true,
        // }),
        EmailPlugin.init({
            devMode: true,
            route: 'mailbox',
            handlers: defaultEmailHandlers,
            templatePath: path.join(__dirname, '../email-plugin/templates'),
            outputPath: path.join(__dirname, 'test-emails'),
            globalTemplateVars: {
                verifyEmailAddressUrl: 'http://localhost:4201/verify',
                passwordResetUrl: 'http://localhost:4201/reset-password',
                changeEmailAddressUrl: 'http://localhost:4201/change-email-address',
            },
        }),
        PerformerPlugin,
        AdminUiPlugin.init({
            route: 'admin',
            port: 5001,
            // Un-comment to compile a custom admin ui
            // app: compileUiExtensions({
            //     outputPath: path.join(__dirname, './custom-admin-ui'),
            //     extensions: [
            //         {
            //             id: 'test-ui-extension',
            //             extensionPath: path.join(__dirname, 'test-plugins/with-ui-extension/ui'),
            //             ngModules: [
            //                 {
            //                     type: 'lazy',
            //                     route: 'greetz',
            //                     ngModuleFileName: 'greeter.module.ts',
            //                     ngModuleName: 'GreeterModule',
            //                 },
            //                 {
            //                     type: 'shared',
            //                     ngModuleFileName: 'greeter-shared.module.ts',
            //                     ngModuleName: 'GreeterSharedModule',
            //                 },
            //             ],
            //         },
            //         {
            //             globalStyles: path.join(
            //                 __dirname,
            //                 'test-plugins/with-ui-extension/ui/custom-theme.scss',
            //             ),
            //         },
            //         {
            //             id: 'external-ui-extension',
            //             extensionPath: path.join(__dirname, 'test-plugins/with-external-ui-extension'),
            //             ngModules: [
            //                 {
            //                     type: 'lazy',
            //                     route: 'greet',
            //                     ngModuleFileName: 'external-ui-extension.ts',
            //                     ngModuleName: 'ExternalUiExtensionModule',
            //                 },
            //             ],
            //             staticAssets: [
            //                 {
            //                     path: path.join(__dirname, 'test-plugins/with-external-ui-extension/app'),
            //                     rename: 'external-app',
            //                 },
            //             ],
            //         },
            //     ],
            //     devMode: true,
            // }),
        }),
    ],
};

function getDbConfig(): DataSourceOptions {
    const dbType = process.env.DB || 'postgres';
    switch (dbType) {
        case 'postgres':
            console.log('Using postgres connection');
            return {
                synchronize: false,
                type: 'postgres',
                host: process.env.DB_HOST || 'localhost',
                port: Number(process.env.DB_PORT) || 5432,
                username: process.env.DB_USERNAME || 'postgres',
                password: process.env.DB_PASSWORD || 'pwd@kodi',
                database: process.env.DB_NAME || 'bookmymusic',
                schema: process.env.DB_SCHEMA || 'public',
            };
        case 'sqlite':
            console.log('Using sqlite connection');
            return {
                synchronize: false,
                type: 'better-sqlite3',
                database: path.join(__dirname, 'vendure.sqlite'),
            };
        case 'sqljs':
            console.log('Using sql.js connection');
            return {
                type: 'sqljs',
                autoSave: true,
                database: new Uint8Array([]),
                location: path.join(__dirname, 'vendure.sqlite'),
            };
        case 'mysql':
        default:
            console.log('Using mysql connection');
            return {
                synchronize: true,
                type: 'mariadb',
                host: '127.0.0.1',
                port: 3306,
                username: 'root',
                password: '',
                database: 'vendure2-dev',
            };
    }
}
