import { gql } from 'graphql-tag';

export const commonApiExtensions = gql`
    type Performer implements Node {
        id: ID!
        name: String!
        type: String!
        createdAt: DateTime!
        updatedAt: DateTime!
        deletedAt: DateTime
        description: String
        rating: Float
        featured: Boolean
        products: [Product]
    }

    type PerformerList implements PaginatedList {
        items: [Performer!]!
        totalItems: Int!
    }

    input PerformerListOptions {
        skip: Int
        take: Int
    }

    extend type Query {
        performer(id: ID!): Performer
        performers(options: PerformerListOptions): [Performer]
    }
`;

export const shopApiExtensions = gql`
    ${commonApiExtensions}
`;

export const adminApiExtensions = gql`
    ${commonApiExtensions}

    input CreatePerformerInput {
        name: String!
        description: String
        type: String!
        rating: Float
        featured: Boolean
    }

    input UpdatePerformerInput {
        name: String!
        description: String
        type: String!
        rating: Float
        featured: Boolean
    }

    extend type Mutation {
        createPerformer(input: CreatePerformerInput!): Performer!
        updatePerformer(id: ID!, input: UpdatePerformerInput!): Performer!
        deletePerformer(id: ID!): Boolean!
    }
`;
