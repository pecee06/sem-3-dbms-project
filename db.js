import mysql from 'mysql2';

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "pc2406",
    database: "ebus"
}).promise();

const tableName = "credentials";

export async function insert(data) {
    let q,result;
    q = `insert into ${tableName} values (?,?)`;
    result = await pool.query(q,[data.uname,data.pass]);
}