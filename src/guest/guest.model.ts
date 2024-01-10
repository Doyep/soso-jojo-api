import { model, Schema, Document } from 'mongoose'

export interface IGuest extends Document {
  _id?: string
  lastName: string
  firstName: string
  status: 'present' | 'absent'
}

export const guestSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true, auto: true },
  lastName: { type: String },
  firstName: { type: String },
  status: { type: String },
})

export const Guest = model<IGuest>('guests', guestSchema)