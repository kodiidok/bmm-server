import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import {
    Ctx,
    Product,
    ProductVariant,
    RequestContext,
    TransactionalConnection,
    translateDeep,
} from '@vendure/core';
