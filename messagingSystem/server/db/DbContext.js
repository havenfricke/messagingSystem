import mongoose from 'mongoose'
import { AccountSchema, ProfileSchema } from '../models/Account'
import { MessagesSchema } from "../models/Message";
import { OfferSchema } from "../models/Offer";
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Profiles = mongoose.model('Profile', ProfileSchema, 'accounts');
  Offers = mongoose.model('Offer', OfferSchema)

  Messages = mongoose.model('Message', MessagesSchema)
}

export const dbContext = new DbContext()
