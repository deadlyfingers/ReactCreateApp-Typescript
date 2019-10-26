import React from 'react'
import ReactDOM from 'react-dom'
import ListViewContainer from './ListViewContainer'
import GraphQLClient from '../services/graphql'

it('ListViewContainer renders without crashing', () => {
  const dataProvider = new GraphQLClient('http://localhost', '')
  const div = document.createElement('div')
  ReactDOM.render(<ListViewContainer dataProvider={dataProvider} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
