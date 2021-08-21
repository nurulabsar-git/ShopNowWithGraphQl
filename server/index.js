const {ApolloServer, gql } = require('apollo-server');

const {mainCards, animals, categories} = require('./db');
const typeDefs = require('./schema');
const Query = require('./resolvers/Query');
const Category = require('./resolvers/Category');
const Animal = require('./resolvers/Animal');

// const typeDefs = gql`
//   type MainCard {
//     title: String!
//     image: String!
//   }
 
//    type Animal {
//      id: ID!
//      image: String!
//      title: String!
//      price: String!
//      description: [String!]!
//      stock: Int!
//      onSale: Boolean
//      slug: String!
//      category: Category
    
//  } 

//    type Category{
//      id: ID!
//      image: String!
//      category: String!
//      slug: String!
//      animals: [Animal!]!
    
//    }



//   type Query {
//     mainCard: [MainCard]
//     animals: [Animal!]!
//     animal(slug: String!): Animal
//     categories: [Category!]!
//     category(slug: String!): Category
//   }
// `;

 
//   const resolvers = {
//     /* start query resolver */
//     Query: {
//       mainCard: () => mainCards, // this object name (mainCard) is most important, It must similar to the query name {mainCard  (↑ top)}. that means first time compiler, read data type for certain entity and then find it from resolver!
//       animals: () => animals,
//       animal:(parent, args, ctx) => {
//             let animal = animals.find((datum) => { // THIS animals come from db.js
//             return  datum.slug === args.slug
//             }) 
//             // console.log("SlugTest:", args)
//             return animal
//             },
//       categories: () => categories,

//       category: (parent, args, ctx) => {
//             let category = categories.find((datum) => {
//               return datum.slug === args.slug
//               })
//               // console.log("categorySlug:", args)
//               return category
//           }

//     },
//     /* end query resolver */
//     /* start category resolver */
    
//       Category: {
//        animals: (parent, args, ctx) => {
//         return animals.filter(datum=> {
//           console.log("animalFilter: ",  datum)
//           return datum.category === parent.id
//         })
//      // console.log(parent) 
//      }},
//     /*End query resolver */
    
//     // Start Animal resolver
//      Animal: {
//      category: (parent, args, ctx) => {
//        console.log(parent)
//       return categories.find(datum => {
//         return datum.id === parent.category
//       })
//     }
//   },
//       // End Animal resolver

// };
// const server = new ApolloServer({ typeDefs, resolvers });

  const server = new ApolloServer({
    typeDefs, 
    resolvers: {
      Query,
      Animal,
      Category
    }
  
  
  });
  server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});