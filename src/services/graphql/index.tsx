import { GraphQLQuery } from './types'
import { KeyValues } from '../../types'
import { HttpResponse, DataProvider } from '../types'
import Http from '../Http'

class GraphQLClient implements DataProvider {
  readonly endpoint: string

  query: string

  variables: KeyValues

  constructor(endpoint: string, query: string, variables: KeyValues = {}) {
    this.endpoint = endpoint
    this.query = query
    this.variables = variables
  }

  fetchData<T>(page = 1): Promise<HttpResponse<T>> {
    const headers = {
      'Content-Type': 'application/json',
    }
    const body = GraphQLClient.QueryBody(page)
    // Sends GraphQL paginated query
    return Http.Post<T>(this.endpoint, headers, body)
  }

  static QueryBody = (page: number): string => {
    const json = GraphQLClient.Query(page)
    // strips out whitespace for POST body request
    return JSON.stringify(json)
      .replace(/\\n/g, '')
      .replace(/\\t/g, ' ')
      .replace(/\s\s+/g, ' ')
  }

  static Query = (page: number): GraphQLQuery => {
    // TODO: abstract variables logic
    const variables = { page }
    // TODO: abstract query logic
    const query = `
    query($page: Int!)
    {
      Page(page: $page) {
        pageInfo {
          total
          perPage
          currentPage
          lastPage
          hasNextPage
        }
        media(sort: ID) {
          id
          title {
            romaji
            english
            native
            userPreferred
          }
          coverImage {
            extraLarge
            large
            medium
            color
          }
        }
      }
    }
    `
    return {
      query,
      variables,
    }
  }
}

export default GraphQLClient
