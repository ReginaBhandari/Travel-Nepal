/**
 * Delete existing entries and seed values for `bookings`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
export function seed(knex) {
  return knex('bookings')
    .del()
    .then(() => {
      return knex('bookings').insert([
        {
          booked_by: 1,
          start_date: '2022-06-11',
          end_date: '2022-06-21',
          destination_id: 1,
        },
      ]);
    });
}
