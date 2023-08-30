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
        // const performer = await this.connection.getEntityOrThrow(ctx, Performer, id);
        // const updatedPerformer = patchEntity(performer, input);
        // return this.connection.getRepository(ctx, Performer).save(updatedPerformer);
    }
}
