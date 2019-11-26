import { Router } from 'express'
const router = Router()
import * as adminController from './controllers/adminController'

router.get('/', adminController.index)

export default router