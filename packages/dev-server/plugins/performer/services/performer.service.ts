import { Injectable } from '@nestjs/common';
import {
    RequestContext,
    ListQueryBuilder,
    ID,
    TransactionalConnection,
    ChannelService,
    RoleService,
    AssetService,
    ProductVariantService,
    FacetValueService,
    TaxRateService,
    TranslatableSaver,
    CollectionService,
    EventBus,
    CustomFieldRelationService,
    TranslatorService,
} from '@vendure/core';
import { SlugValidator } from '@vendure/core/dist/service/helpers/slug-validator/slug-validator';

import { Performer } from '../../performer/entities/performer.entity';

@Injectable()
export class PerformerService {
    constructor(
        private connection: TransactionalConnection,
        private channelService: ChannelService,
        private roleService: RoleService,
        private assetService: AssetService,
        private productVariantService: ProductVariantService,
        private facetValueService: FacetValueService,
        private taxRateService: TaxRateService,
        private collectionService: CollectionService,
        private listQueryBuilder: ListQueryBuilder,
        private translatableSaver: TranslatableSaver,
        private eventBus: EventBus,
        private slugValidator: SlugValidator,
        private customFieldRelationService: CustomFieldRelationService,
        private translator: TranslatorService,
    ) {}

    async findOneById(
        ctx: RequestContext,
        id: ID,
        // relations?: RelationPaths<Product>,
    ) {
        const performer = await this.connection.getRepository(ctx, Performer).findOne({
            where: { id },
        });
        return performer;
    }

    // async findAll(ctx: RequestContext, options?: PerformerListOptions): Promise<PerformerList> {
    //     const queryBuilder = this.listQueryBuilder
    //         .build(Performer, options)
    //         .leftJoinAndSelect('performer.otherEntitiesIfAny', 'otherEntitiesAliasIfAny');
    //     const [items, totalItems] = await queryBuilder.getManyAndCount();
    //     return {
    //         items,
    //         totalItems,
    //     };
    // }
}
