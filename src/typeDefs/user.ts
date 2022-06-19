import { gql } from 'apollo-server-express';

export const typeDefs = gql`
	type Query {
		users: [User!]!
	}

	type User {
		id: ID!
		email: String!
	}
  
	type Mutation {
		createUser(email: String!): User!
	}
`;
