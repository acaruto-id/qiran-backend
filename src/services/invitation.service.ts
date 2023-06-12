import invitationModel, { type IInvitation } from '../models/invitation.model'

const getAllInvitations = async (): Promise<IInvitation[]> => {
  const invitations = await invitationModel.find()
  return invitations
}

const createInvitation = async (
  invitationData: IInvitation
): Promise<IInvitation> => {
  const invitation = await invitationModel.create(invitationData)
  return invitation
}

const getInvitationByID = async (id: string): Promise<IInvitation | null> => {
  const invitation = await invitationModel.findById(id)
  return invitation
}

const updateInvitation = async (
  id: string,
  invitationData: Partial<IInvitation>
): Promise<IInvitation | null> => {
  const invitation = await invitationModel.findByIdAndUpdate(
    id,
    invitationData,
    { new: true }
  )
  return invitation
}

const deleteInvitation = async (id: string): Promise<void> => {
  await invitationModel.findByIdAndDelete(id)
}

export default {
  getAllInvitations,
  createInvitation,
  getInvitationByID,
  updateInvitation,
  deleteInvitation
}
