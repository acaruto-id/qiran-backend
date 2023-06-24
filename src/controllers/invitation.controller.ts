import type { Request, Response } from 'express'
import invitationService from '../services/invitation.service'
import asyncHandler from 'express-async-handler'
import httpStatus from 'http-status'

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
    const invitationData = req.body
    try {
      const invitation = await invitationService.createInvitation(
        invitationData
      )
      res.status(httpStatus.CREATED).json({
        message: 'Invitation created successfully',
        data: invitation
      })
    } catch (error: any) {
      if (error.name === 'ValidationError') {
        res.status(httpStatus.BAD_REQUEST).json({
          message: error.message
        })
      } else {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
          message: error.message
        })
      }
    }
  }
)

const show = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const invitation = await invitationService.getInvitationByID(req.params.id)

    if (invitation === null) {
      res.status(httpStatus.NOT_FOUND).json({
        message: 'Invitation not found'
      })
    } else {
      res.json({
        message: 'Invitation retrieved successfully',
        data: invitation
      })
    }
  }
)

const update = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const invitationData = req.body
    const updatedInvitation = await invitationService.updateInvitation(
      req.params.id,
      invitationData
    )
    res.json({
      message: 'Invitation updated successfully',
      data: updatedInvitation
    })
  }
)

const destroy = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const invitationId = req.params.id
    await invitationService.deleteInvitation(invitationId)
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
