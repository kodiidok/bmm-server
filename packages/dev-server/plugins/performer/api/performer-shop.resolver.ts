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
export class PerformerShopResolver {
    constructor(
        private connection: TransactionalConnection,
        private listQueryBuilder: ListQueryBuilder,
        private performerService: PerformerService,
    ) {}
}
