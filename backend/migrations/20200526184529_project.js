
exports.up = function(knex) {
  return knex.schema.createTable('project', table => {
  table.increments("id")
  table.integer("month_release_id")
  table.string("project_name")
  table.string("color")
  table.boolean("planning")
  table.boolean("design")
  table.boolean("develop")
  table.boolean("execution")
  table.string("completion")
  table.string("test_complete_date")
  table.string("release_date")
  table.integer("project_update_id")
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("project")
};
