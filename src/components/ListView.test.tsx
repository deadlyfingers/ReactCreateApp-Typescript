import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ListView from './ListView'
import { KeyValues } from '../types'

const generateValues = (): KeyValues[] => {
  const values: KeyValues[] = []
  for (let i = 0; i < 1000; i += 1) {
    values.push({
      name: `item ${i}`,
    })
  }
  return values
}

beforeAll(() => {
  Enzyme.configure({ adapter: new Adapter() })
})

it('ListView renders without crashing', () => {
  const values = generateValues()
  const div = document.createElement('div')
  ReactDOM.render(<ListView values={values} />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('ListView countItems() should equal total length', () => {
  const values = generateValues()
  const wrapper = shallow(<ListView values={values} />)
  const instance = wrapper.instance() as ListView
  expect(instance.countItems()).toStrictEqual(values.length)
})
