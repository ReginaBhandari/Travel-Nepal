/**
 * Create destinations table
 *
 * @param { Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('destination', (table) => {
    table.increments('id').primary().unsigned();
    table.string('destination_name', 30).unique().notNull();
    table.string('description', 2000).notNull();
    table.integer('price').default(1000).notNull();
  });
}

/**
 * Drop table destinations
 *
 * @param {  Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('destination');
}
