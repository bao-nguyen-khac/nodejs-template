const userRoute = require('./user.route');
const postRoute = require('./post.route');

function route(app) {
    app.use('/api/user', userRoute);
    app.use('/api/post', postRoute);
}

module.exports = route;
