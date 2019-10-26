export * from './DataModel'

export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
}

export interface HttpResponse<T> {
  json?: T
  error: boolean
  errorMessage: string
}

export interface DataProvider {
  endpoint: string
  fetchData: <T>(id?: number) => Promise<HttpResponse<T>>
}
