import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { InputMaybe, PerformerListOptions } from '@vendure/common/src/generated-types';
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
export class PerformerEntityResolver {
    constructor(
        private connection: TransactionalConnection,
        private listQueryBuilder: ListQueryBuilder,
        private performerService: PerformerService,
    ) {}

    @Query()
    async performer(@Ctx() ctx: RequestContext, @Args('id') id: string): Promise<Performer | null> {
        return this.performerService.findOneById(ctx, id);
    }

    @Query()
    // @Allow(Permission.ReadCatalog)
    async performers(@Ctx() ctx: RequestContext, @Args('options') options: InputMaybe<PerformerListOptions>) {
        return this.performerService.findAll(ctx, options);
    }
}
