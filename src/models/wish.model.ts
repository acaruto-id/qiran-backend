import mongoose from 'mongoose'

export interface IWish extends mongoose.Document {
  name: string
  address?: string
  wish: string
}

const Wish = new mongoose.Schema<IWish>({
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

export default mongoose.model<IWish>('Wish', Wish)
