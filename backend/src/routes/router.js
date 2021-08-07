const express = require('express')
const routes = express.Router()

const authMiddleware = require('../middlewares/auth')

const PessoasService = require('../services/Pessoas.service')
const AnimaisService = require('../services/Animais.service')
const UserService = require('../services/AuthUser.service')
const RolesService = require('../services/Roles.service')
const PermissionService = require('../services/Permission.service')


routes.post('/permission', PermissionService.create)
routes.get('/permission', PermissionService.index)

routes.post('/roles', RolesService.create)
routes.get('/roles', RolesService.index)

routes.post('/register', UserService.create)
routes.post('/register/authenticate', UserService.authenticate)

//routes.use(authMiddleware);

routes.get('/pessoas', PessoasService.index)
routes.get('/pessoas/:id', PessoasService.show)
routes.post('/pessoas',PessoasService.create)
routes.put('/pessoas/:id', PessoasService.update)
routes.delete('/pessoas/:id', PessoasService.destroy)


routes.get('/animais', AnimaisService.index)
routes.get('/animais/:id', AnimaisService.show)
routes.post('/animais', AnimaisService.create)
routes.put('/animais/:id', AnimaisService.update)
routes.delete('/animais/:id', AnimaisService.destroy)




module.exports = routes;