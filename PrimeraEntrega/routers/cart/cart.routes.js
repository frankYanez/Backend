//Requerimos el metodo Router de express
const { Router } = require('express')
//Ejecutamos ese metodo en la variable router
const router = Router()

const carts = []

//Routes
router.post('/', (req, res)=>{
    const newCart = [
        id,
        products: []
    ]

    if(!carts){
        newCart = [
            id: 1,
            
        ]
    }
})

router.get('/:cid', (req,res)=>{
    const cartId = req.params.cid

    const cartFound = 
})

module.exports = router;