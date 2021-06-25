import { CreateCompliments, Compliments } from '../../domain/usecases'
import {
  CheckTagByIdRepository,
  FindUserAccountRepository,
  AddComplimentsAccountRepository,
  AddId
} from '../rules/db'

export class DbCompliments implements CreateCompliments {
  constructor (
    private readonly addId: AddId,
  private readonly checkTagByIdRepository: CheckTagByIdRepository,
  private readonly findUserAccountRepository: FindUserAccountRepository,
  private readonly addComplimentsAccountRepository: AddComplimentsAccountRepository

  ) {}

  async createCompliments (tagRequest: Compliments.Params): Promise<Compliments.Result> {
    const exists = this.checkTagByIdRepository.checkByTagId(tagRequest.tag_id)
    const sender_userExists = this.findUserAccountRepository.findUserById(tagRequest.user_sender)
    const Receiver_userExists = this.findUserAccountRepository.findUserById(tagRequest.user_receiver)

    const ok = await Promise.all([exists, sender_userExists, Receiver_userExists])
    if (!ok.every(element => (element === false) || (element === undefined || null))) {
      const id = this.addId.uuid()
      const completeCompliments = { ...tagRequest, id }
      const compliments = await this.addComplimentsAccountRepository
        .addCompliments(completeCompliments)

      return compliments
    }
    return false
  }
}
