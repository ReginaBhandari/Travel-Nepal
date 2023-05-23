/**
 * Create table_name table
 *
 * @param { Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("bookings", (table) => {
    table.increments("id").primary().unsigned();
    table.integer("booked_by").references("id").inTable("users");
    table.date("start_date").notNull();
    table.date("end_date").notNull();
    table
      .integer("destination_id")
      .references("id")
      .inTable("destination")
      .notNull();
  });
}

/**
 * Drop table table_NAME
 *
 * @param {  Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable("bookings");
}
