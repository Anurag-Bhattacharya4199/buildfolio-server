/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("reference", (table) => {
    table.increments("referenceId").primary();
    table
      .integer("user_id")
      .unsigned()
      .references("user.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.string("reference_name").notNullable();
    table.string("reference_comment").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table
      .timestamp("updated_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("reference");
};
