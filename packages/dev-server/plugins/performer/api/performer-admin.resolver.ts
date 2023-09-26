import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { InputMaybe, PerformerListOptions, UpdatePerformerInput } from '@vendure/common/src/generated-types';
import {
    Allow,
    Ctx,
    ListQueryBuilder,
    patchEntity,
    Permission,
    Product,
    RequestContext,
    Transaction,
    TransactionalConnection,
} from '@vendure/core';

import { Performer } from '../entities/performer.entity';
import { PerformerService } from '../services/performer.service';

@Resolver()
export class PerformerAdminResolver {
    constructor(
        private connection: TransactionalConnection,
        private listQueryBuilder: ListQueryBuilder,
        private performerService: PerformerService,
    ) {}

    @Transaction()
    @Mutation()
    // @Allow(Permission.UpdateCatalog)
    async updatePerformer(
        @Ctx() ctx: RequestContext,
        @Args('id') id: string,
        @Args('input') input: UpdatePerformerInput,
    ) {
        return this.performerService.updateOneById(ctx, id, input);
    }

    @Transaction()
    @Mutation()
    // @Allow(Permission.UpdateCatalog)
    async createPerformer(@Ctx() ctx: RequestContext, @Args('input') input: UpdatePerformerInput) {
        return this.performerService.createOne(ctx, input);
    }

    // @Transaction()
    // @Mutation()
    // // @Allow(Permission.UpdateCatalog)
    // async deletePerformer(
    //     @Ctx() ctx: RequestContext,
    //     @Args('id') id: string,
    // ) {
    //     return this.performerService.deleteOneById(ctx, id);
    // }
}
