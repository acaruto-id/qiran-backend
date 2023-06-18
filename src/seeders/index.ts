import mongoose from 'mongoose'
import { dbConfig } from '../config'

import seedInvitation from './invitation.seeder'

export default async function seed (): Promise<void> {
  const size = 10

  await mongoose.connect(dbConfig.url)
  console.log('🍃 Connected to MongoDB')

  await seedInvitation(size)
}

seed()
  .then(() => {
    console.log('Seeding completed successfully.')
    process.exit()
  })
  .catch(console.error)
