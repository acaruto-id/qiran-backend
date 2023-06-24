import { Router } from 'express'
import invitationController from '../controllers/invitation.controller'

const invitationRouter = Router()

invitationRouter
  .get('/', invitationController.index)
  .post('/', invitationController.store)
  .get('/:id', invitationController.show)
  .put('/:id', invitationController.update)
  .delete('/:id', invitationController.destroy)

export default invitationRouter
