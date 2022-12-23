const { Router } = require('express')

const router = Router()

const users = []

//Routes
router.get('/', (req,res)=>{
    res.json({
        status: 'success',

    })
})





module.exports = router;