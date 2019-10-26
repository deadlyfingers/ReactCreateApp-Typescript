import { KeyValues, ValueType } from '../../../types'

export default class ListViewModel implements KeyValues {
  [key: string]: ValueType

  name: string

  id: number

  image: string

  color: string

  constructor(id: number, name: string, image: string, color: string) {
    this.id = id
    this.name = name
    this.image = image
    this.color = color
  }
}
