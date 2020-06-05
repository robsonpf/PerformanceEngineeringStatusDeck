const knex = require('./db')

const getAllSlides = async () => {
  return await knex('slide')
    .select('*')
    .orderBy('create_at', 'desc')
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
