import ReactDOM from 'react-dom'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ListViewRenderer from '.'
import ListViewModel from './models'

const generateValues = (name: string, image: string, color: string): ListViewModel[] => {
  const values: ListViewModel[] = []
  for (let i = 0; i < 1000; i += 1) {
    values.push(new ListViewModel(i, `${name}${i}`, image, color))
  }
  return values
}

beforeAll(() => {
  Enzyme.configure({ adapter: new Adapter() })
})

it('renders ListViewRenderer without crashing', () => {
  const index = 0
  const name = 'item'
  const image = './logo192.png'
  const color = '#fff'
  const key = 'key'
  const values = generateValues(name, image, color)
  const listViewRenderer = ListViewRenderer(values, index, key)
  expect(listViewRenderer.key).toBe(key)
  const div = document.createElement('div')
  ReactDOM.render(listViewRenderer, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders ListViewRenderer even element', () => {
  const index = 0
  const name = 'item'
  const image = './logo192.png'
  const color = '#fff'
  const key = 'key'
  const values = generateValues(name, image, color)
  const listViewRenderer = ListViewRenderer(values, index, key)
  const wrapper = shallow(listViewRenderer)
  expect(wrapper.find('.title').text()).toBe(`${name}${index}`)
  expect(wrapper.find('.item').hasClass('even')).toBe(true)
})

it('renders ListViewRenderer odd element', () => {
  const index = 1
  const name = 'item'
  const image = './logo192.png'
  const color = '#fff'
  const key = 'key'
  const values = generateValues(name, image, color)
  const listViewRenderer = ListViewRenderer(values, index, key)
  const wrapper = shallow(listViewRenderer)
  expect(wrapper.find('.title').text()).toBe(`${name}${index}`)
  expect(wrapper.find('.item').hasClass('even')).toBe(false)
})
