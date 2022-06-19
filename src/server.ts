import 'reflect-metadata';
import express from 'express';
import { connectDB } from '../database';
import { ApolloServer } from 'apollo-server-express';
import {typeDefs} from './typeDefs/user'
import {userResolvers} from './resolvers/user.resolver'


const startServer = async () => {
  const app = express();

  const apolloServer = new ApolloServer({
		typeDefs,
		resolvers: [userResolvers],
		context: ({ req, res }) => ({ req, res }),
	});

  await apolloServer.start()

	apolloServer.applyMiddleware({ app, cors: true });
	
  await connectDB().then(() => console.log('DB connected'));

	app.listen(4000, () => {
		console.log('server running on ',apolloServer.graphqlPath);
	});
};

startServer();
