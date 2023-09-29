import { Router } from 'express'
import invitationController from '../controllers/invitation.controller'
import wishController from '../controllers/wish.controller'

const invitationRouter = Router()

invitationRouter
  .get('/', invitationController.index)
  .post('/', invitationController.store)
  .get('/:slug', invitationController.show)
  .put('/:slug', invitationController.update)
  .delete('/:slug', invitationController.destroy)
  .post('/:slug/wish', wishController.store)

export default invitationRouter
