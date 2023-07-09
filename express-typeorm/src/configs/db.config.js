const { DataSource } = require('typeorm');

const myDataSource = new DataSource({
    type: 'mysql',
    host: '192.168.37.144',
    port: 3306,
    username: 'root',
    password: 'admin12345',
    database: 'node_test1',
    entities: ['src/entities/*.js'],
    // logging: true,
    synchronize: true,
});

module.exports = myDataSource;
