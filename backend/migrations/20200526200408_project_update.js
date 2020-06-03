
exports.up = function(knex) {
  return knex.schema.createTable('project_update', table => {
  table.increments("id")
  table.integer("project_id")
  table.foreign("project_id").references("project.id").onDelete("CASCADE")
  table.string("detail")
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("project_update")
};
