import { AddId } from '../../data/rules/db'
import { v4 } from 'uuid'
export class AddIdOnRepository implements AddId {
  uuid ():string {
    return v4()
  }
}
