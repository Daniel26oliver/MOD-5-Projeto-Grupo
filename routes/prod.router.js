const express = require('express')
const router = express.Router()

const prodController = require('../controller/prod.controller.js')

router.get("/", prodController.getAll)
router.get("/:id", prodController.getById)
router.post("/", prodController.create)
router.put("/:id", prodController.update)
router.delete("/:id", prodController.delete)

module.exports = router
