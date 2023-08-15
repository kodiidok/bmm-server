import { DeepPartial } from '@vendure/common/lib/shared-types';
import { VendureEntity } from '@vendure/core';
import { Column, Entity } from 'typeorm';

@Entity()
class Performer extends VendureEntity {
    constructor(input?: DeepPartial<Performer>) {
        super(input);
    }

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    rating: number;
}
