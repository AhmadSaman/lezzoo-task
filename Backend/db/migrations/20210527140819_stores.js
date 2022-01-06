exports.up = function (knex) {
  return knex.schema.createTable("stores", (table) => {
    table.increments("s_id");
    table.string("name");
    table.binary("logo");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("stores");
};
