import { dbContext } from "../db/DbContext"

class MessagessService {

  async getMessages(id) {
    const messages = await dbContext.Messages.find({ offerId: id }).populate('creator').populate('offer')
    return messages
  }
  async createMessage(body) {
    const comment = await dbContext.Messages.create(body)
    await comment.populate('creator')
    await comment.populate('offer')
    return comment
  }
}
export const messagesService = new MessagessService()