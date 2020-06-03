
exports.up = function(knex) {
    return knex.schema.createTable('month_release', table => {
    table.increments("id")
    table.integer("slide_id")
    table.string("month")
    table.foreign("project_id")
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("month_release")
};
