// const {categories} = require('../db');
const Animal = {
    category: (parent, args, {categories}) => {
      console.log(parent)
     return categories.find(datum => {
       return datum.id === parent.category
     })
   }
 }


module.exports = Animal