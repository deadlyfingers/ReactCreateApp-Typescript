/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Results } from './types'
import Http from './Http'

beforeAll(() => {
  Enzyme.configure({ adapter: new Adapter() })
})

it('fetch succeeded with data', () => {
  const mockJson = {
    data: {
      Page: {
        pageInfo: {
          total: 1,
          perPage: 1,
          currentPage: 1,
          lastPage: 1,
          hasNextPage: false,
        },
        media: [
          {
            id: 1,
            title: {
              english: 'one',
              native: 'one',
            },
            coverImage: {
              medium: './logo192.png',
              color: 'red',
            },
          },
        ],
      },
    },
  } as Results
  const mockFetchPromise = Promise.resolve({
    json: () => Promise.resolve(mockJson),
  })
  jest.spyOn(global as any, 'fetch').mockImplementation(() => mockFetchPromise)

  const request = Http.Post<Results>('http://localhost', {}, '')
  request.then(response => {
    expect(response.json!.data!.Page.media.length).toBe(1)
    expect(response.json!.data!.Page.media[0].id).toBe(1)
  })
})

it('fetch should fail with error message', () => {
  const errorMessage = 'fetch data error'
  const mockFetchPromise = Promise.reject(errorMessage)
  jest.spyOn(global as any, 'fetch').mockImplementation(() => mockFetchPromise)

  const request = Http.Post<Results>('http://localhost', {}, '')
  request.then(response => {
    expect(response.json).toBe(undefined)
    expect(response.error).toBe(true)
    expect(response.errorMessage).toBe(errorMessage)
  })
})
