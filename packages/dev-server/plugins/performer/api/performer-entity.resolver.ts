import { Args, Parent, ResolveField, Resolver, Mutation, Query } from '@nestjs/graphql';
import { PaginatedList } from '@vendure/common/lib/shared-types';
import { Api, ApiType, ListQueryBuilder, TransactionalConnection } from '@vendure/core';
import { ErrorResultUnion, UserInputError, Translated } from '@vendure/core';

import { Performer as PerformerArgs } from '../../../../common/src/generated-types';
import { RequestContext } from '../../../../core/src/api//common/request-context';
import { Allow } from '../../../../core/src/api/decorators/allow.decorator';
import { RelationPaths, Relations } from '../../../../core/src/api/decorators/relations.decorator';
import { Ctx } from '../../../../core/src/api/decorators/request-context.decorator';
import { Transaction } from '../../../../core/src/api/decorators/transaction.decorator';
import { Performer } from '../../performer-review/entities/performer.entity';
import { readPerformer } from '../performer-permissions';
import { PerformerService } from '../services/performer-service';

@Resolver('Performer')
export class PerformerEntityResolver {
    constructor(private performerService: PerformerService) {}

    // @Query()
    // @Allow(readPerformer.Permission)
    // async performers(
    //     @Ctx() ctx: RequestContext,
    //     @Args() args: PerformerArgs,
    // ): Promise<PaginatedList<Translated<Performer>>> {
    //     return this.performerService.findAll(ctx, args);
    // }

    //     @Transaction()
    //     @Mutation()
    //     @Allow(Permission.CreateCatalog, Permission.CreateProduct)
    //     async createProduct(
    //         @Ctx() ctx: RequestContext,
    //         @Args() args: MutationCreateProductArgs,
    //     ): Promise<Translated<Product>> {
    //         const { input } = args;
    //         return this.productService.create(ctx, input);
    //     }
}
