import { Router } from 'express'
const router = Router()
import * as adminController from './controllers/adminController'

router.get('/', adminController.index)
router.get('/:id',adminController.details)
// router.get('/details', adminController.index)
export default router