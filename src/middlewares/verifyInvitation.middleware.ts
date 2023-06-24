import { type NextFunction, type Request, type Response } from 'express'
import asyncHandler from 'express-async-handler'
import invitationService from '../services/invitation.service'
import { Error } from 'mongoose'

const verifyInvitation = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const invitationID = req.params.invitationID
    const invitation = await invitationService.getInvitationByID(invitationID)
    if (invitation === null) {
      throw new Error.DocumentNotFoundError(invitationID)
    }

    res.locals.invitation = invitation
    next()
  }
)

export default verifyInvitation
