
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project_update').del()
    .then(function () {
      // Inserts seed entries
      return knex('project_update').insert([
        {
          id: 0,
          projects_id: 0,
          detail: 'Two rounds of Peak load tests completed',
        },
        {
          id: 1,
          projects_id: 0,
          detail: 'Endurance test completed on 05/28. Results are being collated',
        }
      ]);
    });
};
