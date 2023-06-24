import invitationModel, { type IInvitation } from '../models/invitation.model'
import { faker } from '@faker-js/faker'

function createInvitation (): any {
  const invitation = {
    quote: {
      content: faker.lorem.sentence(),
      verse: faker.lorem.word()
    },
    startDate: faker.date.future(),
    endDate: faker.date.future(),
    maleBride: {
      name: faker.person.fullName(),
      image: faker.image.avatar(),
      father: faker.person.fullName(),
      mother: faker.person.fullName()
    },
    femaleBride: {
      name: faker.person.fullName(),
      image: faker.image.avatar(),
      father: faker.person.fullName(),
      mother: faker.person.fullName()
    },
    stories: [
      {
        title: faker.lorem.sentence(),
        image: faker.image.urlPicsumPhotos(),
        content: faker.lorem.paragraph()
      }
    ],
    gallery: [
      {
        url: faker.image.urlPicsumPhotos()
      }
    ],
    timelines: [
      {
        title: faker.lorem.sentence(),
        date: faker.date.future(),
        location: faker.location.city()
      }
    ],
    specialGuests: [
      {
        name: faker.person.fullName()
      }
    ],
    wishes: []
  }
  return invitation
}

export default async function seedInvitation (size: number): Promise<void> {
  const invitations: IInvitation[] = [...Array(size)].map(() =>
    createInvitation()
  )
  await invitationModel.insertMany(invitations)
  console.log('Invitations seeded successfully!')
}
