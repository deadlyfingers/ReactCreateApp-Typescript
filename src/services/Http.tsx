import { HttpResponse, HttpMethod } from './types'

class Http {
  static async Post<T>(url: string, headers: Record<string, string>, body: string): Promise<HttpResponse<T>> {
    try {
      const response = await fetch(url, {
        method: HttpMethod.POST,
        body,
        headers,
      })
      const json: T = await response.json()
      return {
        json,
      } as HttpResponse<T>
    } catch (err) {
      // return error response - failed to get results as json type <T>
      return {
        json: undefined,
        error: true,
        errorMessage: err,
      } as HttpResponse<T>
    }
  }
}

export default Http
