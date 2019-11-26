import { Router } from 'express'
const router = Router()
import * as adminController from './controllers/adminController'

router.get('/', adminController.index)
router.get('/details/:id',adminController.details)
router.post('/',adminController.create)
router.put('/:id',adminController.update)
router.delete('/:id',adminController.destroy)
// router.get('/details', adminController.index)
export default router