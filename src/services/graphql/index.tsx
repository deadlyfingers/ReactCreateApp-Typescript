import { DocumentNode } from 'graphql'
import { GraphQLQuery } from './types'
import { HttpResponse, DataProvider } from '../types'
import Http from '../Http'
import { KeyValues } from '../../types'

class GraphQLClient implements DataProvider {
  readonly endpoint: string

  gqlQuery: DocumentNode

  constructor(endpoint: string, gqlQuery: DocumentNode) {
    this.endpoint = endpoint
    this.gqlQuery = gqlQuery
  }

  fetchData<T>(page = 1): Promise<HttpResponse<T>> {
    const headers = {
      'Content-Type': 'application/json',
    }
    // TODO: abstract variables
    const variables: KeyValues = { page }
    const body = GraphQLClient.QueryBody(this.gqlQuery, variables)

    // Sends GraphQL paginated query
    return Http.Post<T>(this.endpoint, headers, body)
  }

  static QueryBody = (gqlQuery: DocumentNode, variables: KeyValues): string => {
    if (!gqlQuery.loc) {
      throw Error('Failed to get GraphQL document')
    }
    const query = gqlQuery.loc.source.body
    const json = GraphQLClient.Query(query, variables)
    // strips out whitespace for POST body request
    return JSON.stringify(json)
      .replace(/\\n/g, '')
      .replace(/\\t/g, ' ')
      .replace(/\s\s+/g, ' ')
  }

  static Query = (query: string, variables: KeyValues): GraphQLQuery => {
    return {
      query,
      variables,
    }
  }
}

export default GraphQLClient
