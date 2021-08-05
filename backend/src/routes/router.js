const express = require('express')
const routes = express.Router()

const authMiddleware = require('../middlewares/auth')

const PessoasService = require('../services/Pessoas.service')
const AnimaisService = require('../services/Animais.service')
const UserService = require('../services/AuthUser.service')

routes.post('/register', UserService.create)
routes.post('/register/authenticate', UserService.authenticate)

routes.use(authMiddleware);
//    rotas people    pessoas
routes.get('/pessoas', PessoasService.index)
routes.get('/pessoas/:id', PessoasService.show)
routes.post('/pessoas',PessoasService.create)
routes.put('/pessoas/:id', PessoasService.update)
routes.delete('/pessoas/:id', PessoasService.destroy)

//   rota animals    animais
routes.get('/pessoas', AnimaisService.index)
routes.get('/pessoas/:id', AnimaisService.show)
routes.post('/pessoas', AnimaisService.create)
routes.put('/pessoas/:id', AnimaisService.update)
routes.delete('/pessoas/:id', AnimaisService.destroy)

// register 


module.exports = routes;