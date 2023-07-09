const { EntitySchema } = require('typeorm');

const Post = new EntitySchema({
    name: 'Post',
    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true,
        },
        title: {
            type: 'varchar',
        },
    },
    relations: {
        user: {
            type: 'many-to-one',
            target: 'User',
            joinColumn: true,
        },
    },
});

module.exports = Post;
