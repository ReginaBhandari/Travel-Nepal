/**
 * Delete existing entries and seed values for `reviews`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
export function seed(knex) {
  return knex('reviews')
    .del()
    .then(() => {
      return knex('reviews').insert([
        {
          comment: 'Good Experience',
          reviewer_id: 1,
          destination_id: 2,
        },
      ]);
    });
}
