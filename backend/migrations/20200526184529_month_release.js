
exports.up = function(knex) {
    return knex.schema.createTable('month_release', table => {
    table.increments("id")
    table.integer("slide_id")
    table.foreign("slide_id").references("slide.id").onDelete("CASCADE")
    table.string("month")
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("month_release")
};
