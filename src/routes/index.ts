import { Router } from 'express'
import invitationRouter from './invitation.route'

const router = Router()

router.use('/invitation', invitationRouter)

export default router
