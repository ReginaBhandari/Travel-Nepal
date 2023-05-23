/**
 * Alter bookings table(timestamp)
 *
 * @param { Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.alterTable("bookings", (table) => {
    table.timestamp("start_date").alter();
    table.timestamp("end_date").alter();
  });
}

/**
 * Alter bookings table(date)
 *
 * @param {  Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.alterTable("bookings", (table) => {
    table.date("start_date").alter();
    table.date("end_date").alter();
  });
}
