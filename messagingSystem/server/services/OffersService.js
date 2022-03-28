import { dbContext } from "../db/DbContext"
import { NotFound } from "../utils/Errors"


class OffersService {
  async getAllOffers(query = {}) {
    const offers = await dbContext.Offers.find(query)
    return offers
  }

  async createOffer(body) {
    const offer = await dbContext.Offers.create(body)
    await offer.populate('creator')
    return offer
  }

  async getOfferById(id) {
    const offer = await dbContext.Offers.findById(id).populate('creator')
    if (!offer) {
      throw new NotFound("There is no offer with this id")
    }
    return offer
  }




}
export const offersService = new OffersService()