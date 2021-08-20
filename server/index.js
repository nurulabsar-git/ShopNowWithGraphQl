const {ApolloServer, gql } = require('apollo-server');
const {mainCards, animals } = require('./db');

const typeDefs = gql`
  type MainCard {
    title: String!
    image: String!
  }
 
   type Animals {
    image: String!
     title: String!
     price: String!
     description: [String!]!
     stock: Int!
     onSale: Boolean
     slug: String!
     category: String!
 } 

  type Query {
    mainCard: [MainCard]
    animal: [Animals!]!
  }
`;

 
  const resolvers = {
    Query: {
      mainCard: () => mainCards, // this object name (mainCard) is most important, It must similar to the query name. that means first time compiler read data type for certain entity and then find it from resolver!
      animal: () => animals,

    },
  };


  const server = new ApolloServer({ typeDefs, resolvers });
  server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});