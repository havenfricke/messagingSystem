import mongoose from "mongoose"
const Schema = mongoose.Schema

// NOTE MIGHT EVENTUALLY ADD A "SENDER_ID AND RECEIVER_ID"
export const OfferSchema = new Schema({
  creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' },
  name: { type: String, required: true }
},
  { timestamps: true, toJSON: { virtuals: true } }
)

OfferSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})

