import { DeepPartial } from '@vendure/common/lib/shared-types';
import { VendureEntity } from '@vendure/core';
import { Column, Entity } from 'typeorm';

@Entity()
export class Performer extends VendureEntity {
    constructor(input?: DeepPartial<Performer>) {
        super(input);
    }

    @Column()
    name: string;

    @Column()
    type: string;

    @Column()
    description: string;

    @Column()
    rating: number;
}
