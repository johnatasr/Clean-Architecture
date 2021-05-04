import pgPromise from "pg-promise";

const pgp = pgPromise({});

const database = pgp({
	user: "postgres",
	password: "postgres",
	host: "postgres",
	port: 5432,
	database: "app",
	idleTimeoutMillis: 100
})

export default database;