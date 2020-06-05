const knex = require('./db')

const getAllSlides = async () => {
  return await knex('slide')
    .select('*')
    .orderBy('create_at', 'desc')
}



// const getAllSlides = async () => {
//   return await knex('slide')
// }


module.exports = {
  getAllSlides
}
