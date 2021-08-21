const Query = {
    mainCard: () => mainCards, // this object name (mainCard) is most important, It must similar to the query name {mainCard  (↑ top)}. that means first time compiler, read data type for certain entity and then find it from resolver!
    animals: () => animals,
    animal:(parent, args, ctx) => {
          let animal = animals.find((datum) => { // THIS animals come from db.js
          return  datum.slug === args.slug
          }) 
          // console.log("SlugTest:", args)
          return animal
          },
    categories: () => categories,

    category: (parent, args, ctx) => {
          let category = categories.find((datum) => {
            return datum.slug === args.slug
            })
            // console.log("categorySlug:", args)
            return category
        }

  }

module.exports = Query