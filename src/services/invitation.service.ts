import { Error } from 'mongoose'
import { type InvitationObject } from '../interfaces/mongoose.gen'
import InvitationModel from '../models/invitation.model'

const getAllInvitations = async (): Promise<InvitationObject[]> => {
  const invitations = await InvitationModel.find()
  return invitations
}

const createInvitation = async (
  invitationData: InvitationObject
): Promise<InvitationObject> => {
  const invitation = await InvitationModel.create(invitationData)
  return invitation
}

const getInvitationBySlug = async (
  slug: string
): Promise<InvitationObject | null> => {
  const invitation = await InvitationModel.findOne({ slug })
  return invitation
}

const updateInvitation = async (
  slug: string,
  invitationData: Partial<InvitationObject>
): Promise<InvitationObject | null> => {
  const invitation = await InvitationModel.findOneAndUpdate(
    { slug },
    invitationData,
    { new: true }
  )
  return invitation
}

const deleteInvitation = async (slug: string): Promise<void> => {
  const data = await InvitationModel.findOneAndDelete({ slug })
  if (data === null) {
    throw new Error.DocumentNotFoundError('Invitation not found')
  }
}

export default {
  getAllInvitations,
  createInvitation,
  getInvitationBySlug,
  updateInvitation,
  deleteInvitation
}
