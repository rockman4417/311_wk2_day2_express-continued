const express = require('express')
const router = express.Router()
const productController = require('../controllers/products.js')

router.get("/products", productController.list)

router.get('/products/:id', productController.show)

router.post('/products', productController.create)

module.exports = router