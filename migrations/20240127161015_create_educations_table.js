/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("education", (table) => {
    table.increments("edId").primary();
    table
      .integer("user_id")
      .unsigned()
      .references("user.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.string("school_name").notNullable();
    table.string("certification_name").notNullable();
    table.date("graduation_date").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("education");
};
