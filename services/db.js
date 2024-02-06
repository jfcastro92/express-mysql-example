import { createConnection } from 'mysql2/promise';
import db from '../config.js'

async function query(sql, params) {
  const connection = await createConnection({
    host: "localhost",
    database: "localhost",
    user: "root",
    password: "root",
    port: "3306"
});
  const [results, ] = await connection.execute(sql, params);

  return results;
}

export { query }