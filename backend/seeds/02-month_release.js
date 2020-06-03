
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('month_release').del()
    .then(function () {
      // Inserts seed entries
      return knex('month_release').insert([
        {
          id: 0,
          month: 'June',
          slide_id: 0,
          project_id: 0
        }
      ]);
    });
};
