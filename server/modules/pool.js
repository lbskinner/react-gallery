const pg = require("pg");
const Pool = pg.Pool;

const pool = new Pool({
  database: "react_gallery",
  host: "localhost",
  port: 5432,
  max: 10,
  idleTimeoutMillis: 30000,
});

pool.on("Connect", () => {
  console.log("Connected to Pool!");
});

pool.on("error", () => {
  console.log("Pool Error!");
});

module.exports = pool;
