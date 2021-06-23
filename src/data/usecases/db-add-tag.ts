import { AddTag, CreateTag } from '../../domain/usecases'
import { FindTagAccountRepository, AddTagAccountRepository, CheckTagByNameRepository, AddId } from '../rules/db'

export class DbAddTag implements CreateTag {
  constructor (
    private readonly checkTagByNameRepository:CheckTagByNameRepository,
    private readonly addId: AddId,
    private readonly addTagAccountRepository: AddTagAccountRepository,
    private readonly FindTagAccountRepository: FindTagAccountRepository
  ) {}

  async createTag ({ name }: AddTag.Params): Promise<AddTag.Result> {
    const exists = await this.checkTagByNameRepository.checkByTagName(name)

    if (!exists) {
      const uuid = this.addId.uuid()
      const TagComplete = { id: uuid, name }
      await this.addTagAccountRepository.addTags(TagComplete)
      const tag = await this.FindTagAccountRepository.findTagById(uuid)
      return tag
    }
    return exists
  }
}
