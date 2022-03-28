import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"


class OffersService {


  async getAllOffers() {
    const res = await api.get('api/offers')
    logger.log('getalloffers', res.data)
    AppState.offers = res.data
  }
  async createOffer(body) {
    const res = await api.post('api/offers', body)
    logger.log('createoffer', res.data)
    AppState.offers = AppState.offers.push(res.data)
  }

  async getOfferById(id) {
    const res = await api.get('api/offers/' + id)
    logger.log('getoffersbyId', res.data)
    AppState.activeOffer = res.data
  }
}
export const offersService = new OffersService()