
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('slide').del()
    .then(function () {
      // Inserts seed entries
      return knex('slide').insert([
        {
          id: 0
       }
      ]);
    });
};
