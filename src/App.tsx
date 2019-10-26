import React from 'react'
import './App.scss'
import ListViewContainer from './components/ListViewContainer'
import GraphQLClient from './services/graphql'

const dataProvider = new GraphQLClient('https://graphql.anilist.co/', '')

const App: React.FC = () => {
  return (
    <div className="App anilist">
      <ListViewContainer dataProvider={dataProvider} />
    </div>
  )
}

export default App
