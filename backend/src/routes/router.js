const routes = require('express').Router()


const PessoasController = require('../controllers/pessoas')
const AnimaisController = require('../controllers/animais')

//        pessoas
routes.get('/pessoas', PessoasController.index)
routes.get('/pessoas/:id', PessoasController.show)
routes.post('/pessoas', PessoasController.create)
routes.put('/pessoas/:id', PessoasController.update)
routes.delete('/pessoas/:id', PessoasController.destroy)

//       animais
routes.get('/pessoas', AnimaisController.index)
routes.get('/pessoas/:id', AnimaisController.show)
routes.post('/pessoas', AnimaisController.create)
routes.put('/pessoas/:id', AnimaisController.update)
routes.delete('/pessoas/:id', AnimaisController.destroy)

module.exports = routes;