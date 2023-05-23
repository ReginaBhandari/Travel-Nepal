/**
 * Create reviews table
 *
 * @param { Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('reviews', (table) => {
    table.increments('id').primary().unsigned();
    table.string('comment', 1000).notNull();
    table.timestamp('review_time').default(knex.fn.now()).notNull;
    table.integer('reviewer_id').references('id').inTable('users').notNull();
    table
      .integer('destination_id')
      .references('id')
      .inTable('destination')
      .notNull();
  });
}

/**
 * Drop table reviews
 *
 * @param {  Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('reviews');
}
