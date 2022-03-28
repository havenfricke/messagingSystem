import { Auth0Provider } from "@bcwdev/auth0provider";
import { dbContext } from "../db/DbContext";
import { messagesService } from "../services/MessagesService";
import { offersService } from "../services/OffersService";
import BaseController from "../utils/BaseController";


export class OffersController extends BaseController {
  constructor() {
    super('api/offers')
    this.router
      .get('', this.getAllOffers)
      .get('/:id', this.getOfferById)
      .get('/:id/messages', this.getOfferMessages)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createOffer)
      .post('/:id/messages', this.createMessage)
  }

  async getOfferMessages(req, res, next) {
    try {
      req.body.offerId = req.params.id
      const messages = await messagesService.getMessages(req.params.id)
      return res.send(messages)
    } catch (error) {
      next(error)
    }
  }
  async createOffer(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      req.body.offerId = req.params.id
      const offer = await offersService.createOffer(req.body)
      res.send(offer)
    } catch (error) {
      next(error)
    }
  }

  async getOfferById(req, res, next) {
    try {
      req.body.id = req.params.id
      const offer = await offersService.getOfferById(req.params.id)
      res.send(offer)
    } catch (error) {
      next(error)
    }
  }

  async getAllOffers(req, res, next) {
    try {
      const offers = await offersService.getAllOffers(req.query)
      res.send(offers)
    } catch (error) {
      next(error)
    }
  }

  async createMessage(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      req.body.offerId = req.params.id
      const message = await messagesService.createMessage(req.body)
      return res.send(message)
    } catch (error) {
      next(error)
    }
  }

}