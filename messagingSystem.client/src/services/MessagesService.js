import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class MessagesService {

  async getMessagesByOffer(id) {
    const res = await api.get('api/offers/' + id + '/messages')
    logger.log('getmessagesbyoffer', res.data)
    AppState.messages = res.data
  }

  async createMessage(body, id) {
    const res = await api.post('api/offers/' + id + '/messages', body)
    logger.log('createmessage', res.data)
    AppState.messages = [...AppState.messages, res.data]
  }
}
export const messagesService = new MessagesService()