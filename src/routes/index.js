import { Router } from 'express'
const router = Router()
import adminRoutes from '../modules/accounts/router'

router.use('/admin', adminRoutes)
router.get('/', (req, res, next) => {
    res.send('Ini index')
})

export default router
