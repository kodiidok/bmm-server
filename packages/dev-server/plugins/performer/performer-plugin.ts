import { PluginCommonModule, VendurePlugin } from '@vendure/core';

import { Performer } from '../performer/entities/performer.entity';

import { adminApiExtensions, shopApiExtensions } from './api/api-extensions';
import { PerformerAdminResolver } from './api/performer-admin.resolver';
import { readPerformer } from './performer-permissions';
import { PerformerService } from './services/performer.service';

@VendurePlugin({
    imports: [PluginCommonModule],
    providers: [PerformerService],
    entities: [Performer],
    shopApiExtensions: {
        schema: shopApiExtensions,
        resolvers: [],
    },
    adminApiExtensions: {
        schema: adminApiExtensions,
        resolvers: [PerformerAdminResolver],
    },
    configuration: config => {
        config.authOptions.customPermissions.push(readPerformer);
        return config;
    },
})
export class PerformerPlugin {}
