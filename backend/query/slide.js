const knex = require('./db')

const getAllSlides = async () => {
  return await knex('slide')
    .select('*')
    .orderBy('created_at', 'desc')
}

const createSlide = async () => {
  return await knex('slide')
    .insert()
}



// const getAllSlides = async () => {
//   return await knex('slide')
// }




module.exports = {
  getAllSlides,
  createSlide
}
