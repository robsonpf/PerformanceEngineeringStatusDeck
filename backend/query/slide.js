const knex = require('./db')
// const { }

const getAllSlides = async () => {
  return await knex('slide')
    .select('*')
    .orderBy('created_at', 'ascd')
}

const createSlide = async () => {
  const newSlide = await knex('slide')
    .insert({})
    .into('slide')
    .returning('*')
  
  const
}



// const getAllSlides = async () => {
//   return await knex('slide')
// }




module.exports = {
  getAllSlides,
  createSlide
}
