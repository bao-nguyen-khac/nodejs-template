const myDataSource = require('../configs/db.config');
const UserEntity = require('../entities/user.entity');

class UserController {
    async new(req, res, next) {
        try {
            const user = await myDataSource.getRepository(UserEntity).save({
                name: req.body.name,
            });
            res.status(200).send(user);
        } catch (error) {
            next(error);
        }
    }

    async getAll(req, res, next) {
        try {
            const users = await myDataSource.getRepository(UserEntity).find({
                relations: {
                    posts: true,
                },
            });
            res.status(200).send(users);
        } catch (error) {
            next(error);
        }
    }

    async get(userId) {
        try {
            const user = await myDataSource
                .getRepository(UserEntity)
                .findOneBy({
                    id: userId,
                });
            return user;
        } catch (error) {
            next(error);
        }
    }

    // async get(req, res, next) {
    //     try {
    //         const results = await myDataSource
    //             .getRepository(UserEntity)
    //             .findOneBy({
    //                 id: req.params.id,
    //             });
    //         res.status(200).send(results);
    //     } catch (error) {
    //         next(error);
    //     }
    // }
}

module.exports = new UserController();
