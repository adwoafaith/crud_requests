const Pool = require ('pg').Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "individuals",
    password: "mypostgres055",
    port :"5000",
});

module.exports = pool;
//5432