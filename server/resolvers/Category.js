// const {animals} = require('../db');

const Category = {
    animals: (parent, args, {animals}) => {
     return animals.filter(datum=> {
       console.log("animalFilter: ",  datum)
       return datum.category === parent.id
     })
  // console.log(parent) 
  }}


module.exports = Category