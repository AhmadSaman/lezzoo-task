module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: "localhost",
      database: "node_lezzoo",
      user: "root",
      password: "",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
