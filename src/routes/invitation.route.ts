import { Router } from 'express'
import invitationController from '../controllers/invitation.controller'

const invitationRouter = Router()

invitationRouter
  .get('/', invitationController.index)
  .post('/', invitationController.store)
  .get('/:slug', invitationController.show)
  .put('/:slug', invitationController.update)
  .delete('/:slug', invitationController.destroy)

export default invitationRouter
