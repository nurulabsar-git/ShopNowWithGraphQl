const {ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Book {
    title: String
    author: String
    number: Int
  }
  type MainCard {
    title: String!
    image: String!
  }
 
  type Query {
    books: [Book]
    mainCards: [MainCard]
  }
`;



const books = [
    {
      title: 'The Awakening',
      author: 'Kate Chopin',
      number: 1862787070,
    },
    {
      title: 'City of Glass',
      author: 'Paul Auster',
      number: 1862784835,
    },
  ];


 const mainCards = [
   {
     title: " ",
     image: ""
   },
   {
    title: " ",
    image: ""
  },
  {
    title: " ",
    image: ""
  },
  {
    title: " ",
    image: ""
  }

 ];

  const resolvers = {
    Query: {
      books: () => books,
      mainCards: () => mainCards
    },
  };


  const server = new ApolloServer({ typeDefs, resolvers });
  server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});