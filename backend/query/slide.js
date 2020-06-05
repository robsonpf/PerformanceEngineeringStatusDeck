const knex = require('./db')

const getAllSlides = async () => {
  return await knex('slide')
    .select('*')
    .orderBy('created_at', 'ascd')
}

const createSlide = async () => {
  return await knex('slide')
    .insert({})
    .into('slide')
    .returning('*')
}



// const getAllSlides = async () => {
//   return await knex('slide')
// }




module.exports = {
  getAllSlides,
  createSlide
}
