import { DeepPartial, VendureEntity } from '@vendure/core';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity()
export class Performer extends VendureEntity {
    constructor(input?: DeepPartial<Performer>) {
        super(input);
    }

    @Column()
    name: string;

    @Column()
    description: string;
}
