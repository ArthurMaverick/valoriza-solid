import { AddTag, CreateTag } from '../../domain/usecases'
import { FindTagAccountRepository, AddTagAccountRepository, CheckTagByNameRepository, AddId } from '../rules/db'

export class DbAddTag implements CreateTag {
  constructor (
    private readonly addId: AddId,
    private readonly checkTagByNameRepository:CheckTagByNameRepository,
    private readonly addTagAccountRepository: AddTagAccountRepository,
    private readonly FindTagAccountRepository: FindTagAccountRepository
  ) {}

  async createTag (tagField : AddTag.Params): Promise<AddTag.Result> {
    const exists = await this.checkTagByNameRepository.checkByTagName(tagField.name)

    if (!exists) {
      const uuid = this.addId.uuid()
      const TagComplete = { id: uuid, name: tagField.name }
      await this.addTagAccountRepository.addTags(TagComplete)
      const tag = await this.FindTagAccountRepository.findTagById(uuid)
      return tag
    }
    return false
  }
}
