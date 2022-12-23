const { Router } = require('express')
const petsRoutes = require('./pets/pets.routes')
const usersRoutes = require('./useers/users.routes')
const { route } = require('./users/users.routes')

const router = Router()


router.use('/pets',petsRoutes)
router.use('/users',usersRoutes)

module.exports = router;