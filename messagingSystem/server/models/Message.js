import mongoose from "mongoose"
const Schema = mongoose.Schema

export const MessagesSchema = new Schema({
  body: { type: String, required: true },
  creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' },
  offerId: { type: Schema.Types.ObjectId, required: true, ref: 'Offer' }
},
  { timestamps: true, toJSON: { virtuals: true } }
)

MessagesSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})

MessagesSchema.virtual('offer', {
  localField: 'offerId',
  foreignField: '_id',
  justOne: true,
  ref: 'Offer'
})