import type { Request, Response } from 'express'
import invitationService from '../services/invitation.service'
import asyncHandler from 'express-async-handler'
import httpStatus from 'http-status'
import { Error } from 'mongoose'

const index = asyncHandler(
  async (_req: Request, res: Response): Promise<void> => {
    const invitations = await invitationService.getAllInvitations()
    res.json({
      message: 'Invitations retrieved successfully',
      data: invitations
    })
  }
)

const store = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const invitation = await invitationService.createInvitation(req.body)
    res.status(httpStatus.CREATED).json({
      message: 'Invitation created successfully',
      data: invitation
    })
  }
)

const show = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const invitation = await invitationService.getInvitationBySlug(
      req.params.slug
    )
    if (invitation === null) {
      throw new Error.DocumentNotFoundError(req.params.slug)
    }

    res.json({
      message: 'Invitation retrieved successfully',
      data: invitation
    })
  }
)

const update = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const updatedInvitation = await invitationService.updateInvitation(
      req.params.slug,
      req.body
    )
    if (updatedInvitation === null) {
      throw new Error.DocumentNotFoundError(req.params.slug)
    }

    res.json({
      message: 'Invitation updated successfully',
      data: updatedInvitation
    })
  }
)

const destroy = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    await invitationService.deleteInvitation(req.params.slug)
    res.json({
      message: 'Invitation deleted successfully'
    })
  }
)

export default {
  index,
  store,
  show,
  update,
  destroy
}
