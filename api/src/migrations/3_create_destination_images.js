/**
 * Create destination_images table
 *
 * @param { Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('destination_images', (table) => {
    table.increments('id').primary().unsigned();
    table.string('image_url', 500).notNull();
    table
      .integer('destination_id')
      .references('id')
      .inTable('destination')
      .notNull();
  });
}

/**
 * Drop destination_images table
 *
 * @param {  Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('destination_images');
}
