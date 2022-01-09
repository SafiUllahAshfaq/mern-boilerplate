// import mysql from 'mysql';

// export const db = mysql.createConnection({
// host: "localhost",
// user: "root",
// password: "Nadeem001",
// database:"cpa" 
// })


import { Sequelize } from 'sequelize';

const host = process.env.DB_HOST
const port = Number(process.env.DB_PORT as string)
const database = process.env.DB_DATABASE as string
const username = process.env.DB_USERNAME as string
const password = process.env.DB_PASSWORD as string
console.log({
    host,
    port,
    database,
    username,
    password,
})
export const db = new Sequelize(database, username, password, {

    dialect: 'mysql',
    host,
    port

});

console.log('db connected...');



