const { EntitySchema } = require("typeorm");

const User = new EntitySchema({
    name: "User",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
        },
        name: {
            type: "varchar",
        },
    },
});

module.exports = User;
