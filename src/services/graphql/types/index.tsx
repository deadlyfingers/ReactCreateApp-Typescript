import { KeyValues } from '../../../types'

export interface GraphQLQuery {
  query: string
  variables: KeyValues
}
