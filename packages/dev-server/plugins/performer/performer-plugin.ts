import { PluginCommonModule, VendurePlugin } from '@vendure/core';

import { Performer } from '../performer/entities/performer.entity';

import { adminApiExtensions, shopApiExtensions } from './api/api-extensions';
import { PerformerAdminResolver } from './api/performer-admin.resolver';
import { PerformerEntityResolver } from './api/performer-entity.resolver';
import { PerformerShopResolver } from './api/performer-shop.resolver';
import { readPerformer, createPerformer, updatePerformer, deletePerformer } from './performer-permissions';
import { PerformerService } from './services/performer.service';

@VendurePlugin({
    imports: [PluginCommonModule],
    providers: [PerformerService],
    entities: [Performer],
    shopApiExtensions: {
        schema: shopApiExtensions,
        resolvers: [PerformerShopResolver, PerformerEntityResolver],
    },
    adminApiExtensions: {
        schema: adminApiExtensions,
        resolvers: [PerformerAdminResolver, PerformerEntityResolver],
    },
    configuration: config => {
        config.authOptions.customPermissions.push(
            readPerformer,
            createPerformer,
            updatePerformer,
            deletePerformer,
        );
        return config;
    },
})
export class PerformerPlugin {}
