import React from 'react'
import ReactDOM from 'react-dom'
import ListViewContainer from './ListViewContainer'
import GraphQLClient from '../services/graphql'
import gqlQuery from '../services/graphql/queries/PageResults.gql'

it('ListViewContainer renders without crashing', () => {
  const dataProvider = new GraphQLClient('http://localhost', gqlQuery)
  const div = document.createElement('div')
  ReactDOM.render(<ListViewContainer dataProvider={dataProvider} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
