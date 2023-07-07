import mongoose from 'mongoose'
import { type WishObject } from '../interfaces/mongoose.gen'

const Wish = new mongoose.Schema<WishObject>({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: false
  },
  wish: {
    type: String,
    required: true
  }
})

export default mongoose.model<WishObject>('Wish', Wish)
