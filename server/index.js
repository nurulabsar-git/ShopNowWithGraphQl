const {ApolloServer, gql } = require('apollo-server');
const {mainCards, animals, categories} = require('./db');

const typeDefs = gql`
  type MainCard {
    title: String!
    image: String!
  }
 
   type Animals {
     id: ID!
    image: String!
     title: String!
     price: String!
     description: [String!]!
     stock: Int!
     onSale: Boolean
     slug: String!
     category: String!
 } 

   type Category{
     id: ID!
     image: String!
     category: String!
     slug: String!
   }



  type Query {
    mainCard: [MainCard]
    animals: [Animals!]!
    animal(eachSlug: String!): Animals
    categories: [Category!]!
    category(eachSlug: String!): Category
  }
`;

 
  const resolvers = {
    Query: {
      mainCard: () => mainCards, // this object name (mainCard) is most important, It must similar to the query name {mainCard  (↑ top)}. that means first time compiler, read data type for certain entity and then find it from resolver!
      animals: () => animals,
      animal:(parent, args, ctx) => {
        let animalToBeFound = animals.find((datum) => {
          // console.log(args)
         return  datum.slug === args.eachSlug
        
        }) 
        // console.log("SlugTest:", args)
        return animalToBeFound
      },
       categories: () => categories,
       
       category: (parent, args, ctx) => {
           let certainCategory = categories.find((datum) => {
              return datum.slug === args.eachSlug
           })
           console.log("categorySlug:", args)
          return certainCategory
       }



    }};


  const server = new ApolloServer({ typeDefs, resolvers });
  server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});