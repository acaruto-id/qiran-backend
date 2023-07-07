import mongoose from 'mongoose'
import WishModel from './wish.model'
import { type InvitationObject } from '../interfaces/mongoose.gen'

const Invitation = new mongoose.Schema<InvitationObject>({
  title: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true
  },
  coverImage: {
    type: String,
    required: true
  },
  landingImage: {
    type: String,
    required: true
  },
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
      url: {
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
  wishes: [WishModel.schema]
})

export default mongoose.model<InvitationObject>('Invitation', Invitation)
