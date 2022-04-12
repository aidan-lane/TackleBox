const { Pool } = require("pg");

console.log("Creating Postgres pool. NODE_ENV:", process.env.NODE_ENV);
const options = {
	connectionString: process.env.DATABASE_URL
}
if(process.env.NODE_ENV === "production") {
	options.ssl = {
		rejectUnauthorized: false
	}
}
const pool = new Pool(options);

module.exports = pool;
