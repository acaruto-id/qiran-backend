import { type Request, type Response } from 'express'
import asyncHandler from 'express-async-handler'
import { type IInvitation } from '../models/invitation.model'

const index = asyncHandler(
  async (_req: Request, res: Response): Promise<void> => {
    const invitation = res.locals.invitation as IInvitation
    res.json({
      message: 'Wishes retrieved successfully',
      data: invitation.wishes
    })
  }
)

const store = asyncHandler(
  async (_req: Request, res: Response): Promise<void> => {
    res.json({
      message: 'Hello World!'
    })
  }
)

export default {
  index,
  store
}
