import { Args, Mutation, Query, Resolver, ResolveField, Parent } from '@nestjs/graphql';
import { ProductList } from '@vendure/common/lib/generated-types';
import { InputMaybe, PerformerListOptions } from '@vendure/common/src/generated-types';
import {
    Allow,
    Ctx,
    ListQueryBuilder,
    patchEntity,
    Permission,
    Product,
    RelationPaths,
    Relations,
    RequestContext,
    Transaction,
    TransactionalConnection,
    Translated,
} from '@vendure/core';

import { Performer } from '../entities/performer.entity';
import { PerformerService } from '../services/performer.service';

@Resolver()
export class PerformerEntityResolver {
    constructor(
        private connection: TransactionalConnection,
        private listQueryBuilder: ListQueryBuilder,
        private performerService: PerformerService,
    ) {}

    @ResolveField('products', () => [Product])
    async products(
        @Parent() performer: Translated<Performer>,
        @Ctx() ctx: RequestContext,
    ): Promise<Product[]> {
        return performer.products || null;
    }

    @Query()
    async performer(@Ctx() ctx: RequestContext, @Args('id') id: string): Promise<Performer | null> {
        return this.performerService.findOneById(ctx, id);
    }

    @Query()
    // @Allow(Permission.ReadCatalog)
    async performers(
        @Ctx() ctx: RequestContext,
        @Args('options') options: InputMaybe<PerformerListOptions>,
    ): Promise<Performer[] | null> {
        return this.performerService.findAll(ctx, options);
    }
}
