const myDataSource = require("../configs/db.config");
const UserEntitySchema = require("../entities/user.entity");

class UserController {
    async getAll(req, res, next) {
        try {
            const users = await myDataSource
                .getRepository(UserEntitySchema)
                .find();
            res.status(200).send(users);
        } catch (error) {
            next(error);
        }
    }

    async get(req, res, next) {
        try {
            const results = await myDataSource
                .getRepository(UserEntitySchema)
                .findOneBy({
                    id: req.params.id,
                });
            res.status(200).send(results);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new UserController();
