import { Router } from 'express'
import verifyInvitation from '../middlewares/verifyInvitation.middleware'
import wishController from '../controllers/wish.controller'

const wishRouter = Router()

wishRouter
  .get('/:invitationID', verifyInvitation, wishController.index)
  .post('/:invitationID', verifyInvitation, wishController.store)

export default wishRouter
