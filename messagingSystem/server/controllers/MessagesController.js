import { Auth0Provider } from "@bcwdev/auth0provider";
import { messagesService } from "../services/MessagesService";
import BaseController from "../utils/BaseController";

export class MessagesController extends BaseController {
  constructor() {
    super('api/messages')
    this.router

      .use(Auth0Provider.getAuthorizedUserInfo)
  }


}