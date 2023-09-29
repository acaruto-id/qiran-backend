import type { Request, Response } from 'express'
import asyncHandler from 'express-async-handler'
import httpStatus from 'http-status'
import invitationService from '../services/invitation.service'
import WishModel from '../models/wish.model'

const store = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { slug } = req.params
    const invitation = await invitationService.getInvitationBySlug(slug)

    if (invitation === null) {
      res.status(httpStatus.NOT_FOUND).json({
        message: 'Invitation not found'
      })
      return
    }

    const wish = new WishModel(req.body)
    invitation.wishes.push(wish)
    await invitation.save()

    res.status(httpStatus.CREATED).json({
      message: 'Wish created successfully',
      data: wish
    })
  }
)

export default {
  store
}
