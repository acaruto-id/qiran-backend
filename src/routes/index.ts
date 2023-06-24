import { Router } from 'express'
import invitationRouter from './invitation.route'
import wishRouter from './wish.route'

const router = Router()

router.use('/invitation', invitationRouter)
router.use('/wish', wishRouter)

export default router
