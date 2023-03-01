const express = require('express')
const router = express.Router()
const ItemsController = require('../controllers/ItemsController')

//helpers
const checkAuth = require('../helpers/auth').checkAuth 

router.get('/add', checkAuth, ItemsController.criarItem) 
router.post('/add', checkAuth, ItemsController.postarItem)
router.get('/edit/:id', checkAuth, ItemsController.editarItems)
router.post('/edit', checkAuth,ItemsController.postarEditarItems)
router.get('/crud', checkAuth, ItemsController.crudItems)
router.post('/remove', checkAuth, ItemsController.removerItems)
router.get('/', ItemsController.exibirHomeDashboard)


module.exports = router