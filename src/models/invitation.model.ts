import mongoose from 'mongoose'
import wishModel, { type IWish } from './wish.model'

export interface IInvitation extends mongoose.Document {
  quote: {
    content: string
    verse?: string
  }
  startDate: Date
  endDate?: Date
  maleBride: {
    name: string
    image?: string
    father?: string
    mother?: string
  }
  femaleBride: {
    name: string
    image?: string
    father?: string
    mother?: string
  }
  stories: Array<{
    title: string
    image?: string
    content: string
  }>
  gallery: Array<{
    url: string
  }>
  timelines: Array<{
    title: string
    date: Date
    location?: string
    locationURL?: string
  }>
  specialGuests: Array<{
    name: string
  }>
  music?: string
  wishes: IWish[]
}

const Invitation = new mongoose.Schema<IInvitation>({
  quote: {
    content: {
      type: String,
      required: true
    },
    verse: {
      type: String,
      required: false
    }
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: false
  },
  maleBride: {
    name: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: false
    },
    father: {
      type: String,
      required: false
    },
    mother: {
      type: String,
      required: false
    }
  },
  femaleBride: {
    name: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: false
    },
    father: {
      type: String,
      required: false
    },
    mother: {
      type: String,
      required: false
    }
  },
  stories: [
    {
      title: {
        type: String,
        required: true
      },
      image: {
        type: String,
        required: false
      },
      content: {
        type: String,
        required: true
      }
    }
  ],
  gallery: [
    {
      url: {
        type: String,
        required: true
      }
    }
  ],
  timelines: [
    {
      title: {
        type: String,
        required: true
      },
      date: {
        type: Date,
        required: true
      },
      location: {
        type: String,
        required: false
      },
      locationString: {
        type: String,
        required: false
      }
    }
  ],
  specialGuests: [
    {
      name: {
        type: String,
        required: true
      }
    }
  ],
  music: {
    type: String,
    required: false
  },
  wishes: [wishModel.schema]
})

export default mongoose.model<IInvitation>('Invitation', Invitation)
