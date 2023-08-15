import { Injectable } from '@nestjs/common';
import {
    RequestContext,
    ListQueryBuilder,
    ListQueryOptions,
    EntityNotFoundError,
    PaginatedList,
} from '@vendure/core';

import { Performer as PerformerArgs } from '../../../../common/src/generated-types';
import { Performer } from '../../performer-review/entities/performer.entity';

@Injectable()
export class PerformerService {
    constructor(private listQueryBuilder: ListQueryBuilder) {}

    // async findAll(ctx: RequestContext, args: PerformerArgs): Promise<PaginatedList<Performer>> {
    //     const qb = this.listQueryBuilder
    //         .build(Performer, args.options, {
    //             relations: ['some_relation'], // Add any necessary relations
    //         })
    //         .leftJoinAndSelect('performer.someRelation', 'someRelationAlias'); // Replace with your relation

    //     const [items, totalItems] = await qb.getManyAndCount();

    //     return {
    //         items,
    //         totalItems,
    //     };
    // }
}
