import { PluginCommonModule, VendurePlugin } from '@vendure/core';

import { Performer } from '../performer-review/entities/performer.entity';

import { adminApiExtensions, shopApiExtensions } from './api/api-extensions';

@VendurePlugin({
    imports: [PluginCommonModule],
    entities: [Performer],
    shopApiExtensions: {
        schema: shopApiExtensions,
        resolvers: [],
    },
    adminApiExtensions: {
        schema: adminApiExtensions,
        resolvers: [],
    },
})
export class PerformerPlugin {}
