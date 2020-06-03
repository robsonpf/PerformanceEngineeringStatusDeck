
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project').del()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
          {
            id: 0,
            month_release_id: 0,
            project_name: 'P&T_PO_32 Boost XP I',
            color:'GREEN',
            planning: true,
            design: false,
            develop: false,
            execution: false,
            completion: '0%',
            test_complete_date: '6/01',
            release_date: '6/11',
            project_update_id: 0
          }
      ]);
    });
};
