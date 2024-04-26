const { Router } = require('express');
const routes = Router();

const produtoRouter = require('./produtoRouter')
const AuthRoutes = require('../Routes/authRouter');

const UserRoutes = require('../Routes/usuarioRouter');

routes.use('/auth', AuthRoutes );
routes.use('/user', UserRoutes );
routes.use('/produto', produtoRouter)

module.exports = routes;     