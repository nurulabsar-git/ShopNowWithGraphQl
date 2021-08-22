// const {mainCards, animals, categories} = require('../db');

const Query = {
    mainCard: (parent, args, {mainCards}) => mainCards, // this object name (mainCard) is most important, It must similar to the query name {mainCard  (↑ top)}. that means first time compiler, read data type for certain entity and then find it from resolver!
    animals: (parent, args, {animals}) => animals,
    animal:(parent, args, {animals}) => {
            // console.log(message)
          let animal = animals.find((datum) => { // THIS animals come from db.js
          return  datum.slug === args.slug
          }) 
          // console.log("SlugTest:", args)
          return animal
          },
    categories: (parent, args, {categories}) => categories,

    category: (parent, args, {categories}) => {
         
          let category = categories.find((datum) => {
            return datum.slug === args.slug
            })
            // console.log("categorySlug:", args)
            return category
        }
  }

module.exports = Query