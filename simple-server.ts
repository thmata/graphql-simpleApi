import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    users: [String!]!
  }

  type Mutation {
    createUser(name: String): String!
  }
`;

const users: string[] = [];

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query: {
      users: () => {
        return users;
      },
    },

    Mutation: {
      createUser: (parent, args, ctx) => {
        users.push(args.name);

        console.log(args);
        return "Olá";
      },
    },
  },
});

server.listen().then(({ url }) => {
  console.log(`HTTP RUNNING ON ${url}`);
});
