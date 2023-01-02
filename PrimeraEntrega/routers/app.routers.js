const { Router } = require('express')
const router = Router()

const cartRoutes = require('./cart/cart.routes')
const productsRoutes = require('./products/products.routes')

router.use('/api/products',productsRoutes)


module.exports = router;
