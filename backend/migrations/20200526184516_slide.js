
exports.up = function(knex) {
  return knex.schema.createTable('slide', table => {
    table.increments("id")
    table.timestamps(true, true)
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable("slide")
};
