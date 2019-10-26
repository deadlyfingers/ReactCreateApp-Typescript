import React from 'react'
import './App.scss'
import ListViewContainer from './components/ListViewContainer'
import GraphQLClient from './services/graphql'
import gqlQuery from './services/graphql/queries/PageResults.gql'

const dataProvider = new GraphQLClient('https://graphql.anilist.co/', gqlQuery)

const App: React.FC = () => {
  return (
    <div className="App anilist">
      <ListViewContainer dataProvider={dataProvider} />
    </div>
  )
}

export default App
