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

const getInvitationByID = async (
  id: string
): Promise<InvitationObject | null> => {
  const invitation = await InvitationModel.findById(id)
  return invitation
}

const updateInvitation = async (
  id: string,
  invitationData: Partial<InvitationObject>
): Promise<InvitationObject | null> => {
  const invitation = await InvitationModel.findByIdAndUpdate(
    id,
    invitationData,
    { new: true }
  )
  return invitation
}

const deleteInvitation = async (id: string): Promise<void> => {
  const data = await InvitationModel.findByIdAndDelete(id)
  if (data === null) {
    throw new Error.DocumentNotFoundError('Invitation not found')
  }
}

export default {
  getAllInvitations,
  createInvitation,
  getInvitationByID,
  updateInvitation,
  deleteInvitation
}
