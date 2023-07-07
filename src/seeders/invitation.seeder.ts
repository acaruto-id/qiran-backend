import { type InvitationObject } from '../interfaces/mongoose.gen'
import invitationModel from '../models/invitation.model'
import { faker } from '@faker-js/faker'

function createInvitation (): InvitationObject {
  const invitation: InvitationObject = {
    title: faker.person.firstName() + ' & ' + faker.person.firstName(),
    slug: faker.lorem.slug(),
    coverImage: faker.image.urlPicsumPhotos(),
    landingImage: faker.image.urlPicsumPhotos(),
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
    stories: [...Array(3).keys()].map(() => ({
      title: faker.lorem.words(2),
      image: faker.image.urlPicsumPhotos(),
      content: faker.lorem.paragraph()
    })),
    gallery: [...Array(4).keys()].map(() => ({
      url: faker.image.urlPicsumPhotos()
    })),
    timelines: [...Array(3).keys()].map(() => ({
      title: faker.lorem.words(2),
      date: faker.date.future(),
      location: faker.location.city(),
      url: faker.internet.url()
    })),
    specialGuests: [...Array(3).keys()].map(() => ({
      name: faker.person.fullName()
    })),
    wishes: [...Array(6).keys()].map(() => ({
      name: faker.person.fullName(),
      address: faker.location.city(),
      wish: faker.lorem.words(10)
    }))
  }
  return invitation
}

export default async function seedInvitation (size: number): Promise<void> {
  const invitations: InvitationObject[] = [...Array(size)].map(() =>
    createInvitation()
  )
  await invitationModel.insertMany(invitations)
  console.log('Invitations seeded successfully!')
}
