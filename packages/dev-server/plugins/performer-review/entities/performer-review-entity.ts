import { Customer, DeepPartial, VendureEntity } from '@vendure/core';
import { Column, Entity, ManyToOne } from 'typeorm';

import { Performer } from './performer.entity';

@Entity()
export class PerformerReview extends VendureEntity {
    constructor(input?: DeepPartial<PerformerReview>) {
        super(input);
    }

    @ManyToOne(type => Performer)
    performer: Performer;

    @Column()
    summary: string;

    @Column('text')
    body: string;

    @Column()
    rating: number;

    @ManyToOne(type => Customer)
    author: Customer;

    @Column()
    authorName: string;

    @Column({ nullable: true })
    authorLocation: string;
}
