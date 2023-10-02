import { Injectable } from '@nestjs/common';
import {
    CreatePerformerInput,
    PerformerListOptions,
    UpdatePerformerInput,
} from '@vendure/common/src/generated-types';
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
    patchEntity,
    ProductService,
} from '@vendure/core';
import { SlugValidator } from '@vendure/core/dist/service/helpers/slug-validator/slug-validator';
import { Product } from '@vendure/core/src/entity';

import { Performer } from '../../performer/entities/performer.entity';

@Injectable()
export class PerformerService {
    constructor(
        private connection: TransactionalConnection,
        private channelService: ChannelService,
        private roleService: RoleService,
        private assetService: AssetService,
        private productVariantService: ProductVariantService,
        private productService: ProductService,
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

    async findOneById(ctx: RequestContext, id: ID) {
        const performer = await this.connection
            .getRepository(ctx, Performer)
            .createQueryBuilder('performer')
            .leftJoinAndSelect('performer.products', 'product_custom_fields_performers_performer')
            .where('performer.id = :id', { id })
            .getOne();

        // Check if performer exists
        if (!performer) {
            return null; // or handle as needed
        }

        return performer;
    }

    async findAll(ctx: RequestContext, options?: PerformerListOptions | any) {
        const productPerformer = this.connection
            .getRepository(ctx, Performer)
            .createQueryBuilder('performer')
            .leftJoinAndSelect('performer.products', 'product_custom_fields_performers_performer');

        if (options.type) {
            productPerformer.andWhere('performer.type = :type', { type: options.type });
        }

        if (options.featured !== undefined) {
            productPerformer.andWhere('performer.featured = :featured', { featured: options.featured });
        }

        const result = await productPerformer.take(options.take).skip(options.skip).getMany();
        return result;
    }

    async updateOneById(ctx: RequestContext, id: ID, input: UpdatePerformerInput) {
        const performer = await this.connection.getEntityOrThrow(ctx, Performer, id);
        const updatedPerformer = patchEntity(performer, input);
        return this.connection.getRepository(ctx, Performer).save(updatedPerformer);
    }

    async createOne(ctx: RequestContext, input: CreatePerformerInput) {
        const newPerformer = new Performer(input);
        return this.connection.getRepository(ctx, Performer).save(newPerformer);
    }

    // async deleteOneById(ctx: RequestContext, id: ID) {
    //     const performer = this.connection.getEntityOrThrow(ctx, Performer, id);
    //     return this.connection.getRepository(ctx, Performer).remove();
    // }

    // async create(ctx: RequestContext, input: CreateProductInput): Promise<Translated<Product>> {
    //     await this.slugValidator.validateSlugs(ctx, input, ProductTranslation);
    //     const product = await this.translatableSaver.create({
    //         ctx,
    //         input,
    //         entityType: Product,
    //         translationType: ProductTranslation,
    //         beforeSave: async p => {
    //             await this.channelService.assignToCurrentChannel(p, ctx);
    //             if (input.facetValueIds) {
    //                 p.facetValues = await this.facetValueService.findByIds(ctx, input.facetValueIds);
    //             }
    //             await this.assetService.updateFeaturedAsset(ctx, p, input);
    //         },
    //     });
    //     await this.customFieldRelationService.updateRelations(ctx, Product, input, product);
    //     await this.assetService.updateEntityAssets(ctx, product, input);
    //     this.eventBus.publish(new ProductEvent(ctx, product, 'created', input));
    //     return assertFound(this.findOne(ctx, product.id));
    // }
}
