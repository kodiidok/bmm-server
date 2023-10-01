import { ProductList } from '@vendure/common/lib/generated-shop-types';
import { DeepPartial } from '@vendure/common/lib/shared-types';
import { Product, ProductVariant, VendureEntity } from '@vendure/core';
import { Column, Entity, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class Performer extends VendureEntity {
    constructor(input?: DeepPartial<Performer>) {
        super(input);
    }

    @Column()
    name: string;

    @Column()
    type: string;

    @Column({ nullable: true })
    description: string;

    @Column({ nullable: true, type: 'float' })
    rating: number;

    @Column({ nullable: true })
    deletedAt: Date;

    @Column({ nullable: true })
    featured?: boolean;

    @ManyToMany(type => Product, { nullable: true })
    @JoinTable({
        name: 'product_custom_fields_performers_performer',
        joinColumn: {
            name: 'performerId',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'productId',
            referencedColumnName: 'id',
        },
    })
    products: Product[];
}
