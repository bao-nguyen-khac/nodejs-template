const express = require("express");
const myDataSource = require("./configs/db.config");

const app = express();
const route = require("./routes/index.route");
// establish database connection
myDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!");
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err);
    });

// create and setup express app

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// register routes
// app.get("/users", async function (req, res, next) {
//     const users = await myDataSource.getRepository(UserEntitySchema).find();
//     res.status(200).send(users);
// });

// app.get("/users/:id", async function (req, res, next) {
//     const results = await myDataSource
//         .getRepository(UserEntitySchema)
//         .findOneBy({
//             id: req.params.id,
//         });
//     return res.status(200).send(results);
// });

// app.post("/users", async function (req, res, next) {
//     const user = myDataSource.getRepository(UserEntitySchema).create(req.body);
//     const results = await myDataSource
//         .getRepository(UserEntitySchema)
//         .save(user);
//     return res.status(200).send(results);
// });

// app.put("/users/:id", async function (req, res, next) {
//     const user = await myDataSource.getRepository(UserEntitySchema).findOneBy({
//         id: req.params.id,
//     });
//     myDataSource.getRepository(UserEntitySchema).merge(user, req.body);
//     const results = await myDataSource
//         .getRepository(UserEntitySchema)
//         .save(user);
//     return res.status(200).send(results);
// });

// app.delete("/users/:id", async function (req, res, next) {
//     const results = await myDataSource
//         .getRepository(UserEntitySchema)
//         .delete(req.params.id);
//     return res.status(200).send(results);
// });

route(app);

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
