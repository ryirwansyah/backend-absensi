import { Router } from 'express'
const router = Router()
import * as adminController from './controllers/adminController'

router.get('/test', adminController.index)

export default router