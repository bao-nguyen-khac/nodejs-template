const myDataSource = require('../configs/db.config');
const PostEntity = require('../entities/post.entity');
const userController = require('./user.controller');

class PostController {
    async new(req, res, next) {
        try {
            const user = await userController.get(req.body.userId);
            const post = myDataSource.createEntityManager().create(PostEntity, {
                title: req.body.title,
                user: user,
            });
            const result = await myDataSource
                .getRepository(PostEntity)
                .save(post);
            res.status(200).send(result);
        } catch (error) {
            next(error);
        }
    }

    async getAll(req, res, next) {
        try {
            const posts = await myDataSource.getRepository(PostEntity).find({
                relations: {
                    user: true,
                },
            });
            res.status(200).send(posts);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new PostController();
