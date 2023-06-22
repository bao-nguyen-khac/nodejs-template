const { DataSource } = require("typeorm");

const myDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "admin12345",
    database: "nest_test1",
    entities: ["src/entities/*.js"],
    // logging: true,
    synchronize: true,
});

module.exports = myDataSource;
