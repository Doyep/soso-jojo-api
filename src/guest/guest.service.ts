import { Guest, IGuest } from './guest.model'

class GuestService {
  async save(guests: IGuest[]): Promise<IGuest[] | null> {
    guests.forEach(guest => delete guest._id)
    return await Guest.insertMany(guests)
  }
  
  async getAll(): Promise<IGuest[]> {
    return await Guest.find()
  }

  async getPresent(): Promise<IGuest[]> {
    return await Guest.find().where('status').equals('present')
  }
}
export const guestService = new GuestService()