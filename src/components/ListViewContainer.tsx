import React from 'react'
import ListView from './ListView'
import RenderListViewCell from './views'
import { Results, Media, DataProvider } from '../services/types'
import ListViewModel from './views/models'
import './ListViewContainer.scss'

interface ListViewContainerProps {
  dataProvider: DataProvider
}

interface ListViewContainerState {
  loading: boolean
  results: Results
}

class ListViewContainer extends React.PureComponent<ListViewContainerProps, ListViewContainerState> {
  constructor(props: ListViewContainerProps) {
    super(props)
    this.state = { loading: false, results: {} }
  }

  componentDidMount(): void {
    this.loadData()
  }

  hasNextPage = (): boolean => {
    if (this.state.results && this.state.results.data && this.state.results.data.Page.pageInfo.hasNextPage) {
      return true
    }
    return false
  }

  getNextPage = (): number => {
    if (this.state.results && this.state.results.data && this.state.results.data.Page.pageInfo.hasNextPage) {
      return this.state.results.data.Page.pageInfo.currentPage + 1
    }
    return 0
  }

  getCurrentPage = (): number => {
    if (this.state.results && this.state.results.data && this.state.results.data.Page.pageInfo.hasNextPage) {
      return this.state.results.data.Page.pageInfo.currentPage
    }
    return 0
  }

  updateResults = (json: Results): Results => {
    if (!this.state.results.data || !json.data) {
      throw Error('Error loading data')
    }
    // append results
    const prevItems = this.state.results.data.Page.media
    const nextItems = json.data.Page.media
    const media = prevItems.concat(nextItems)
    const { pageInfo } = json.data.Page
    // return data with appended values
    return {
      data: {
        Page: {
          media,
          pageInfo,
        },
      },
    }
  }

  loadData = (): void => {
    const { dataProvider } = this.props
    const nextPage = this.getNextPage()
    this.setState({ loading: true })
    dataProvider.fetchData<Results>(nextPage).then(response => {
      if (response.error || !response.json) {
        // TODO: handle error gracefully and return
        throw Error('Failed to fetch json data')
      }
      const updatedResults = nextPage <= 1 ? response.json : this.updateResults(response.json)
      this.setState({ results: updatedResults, loading: false })
    })
  }

  loadMoreData = (): void => {
    // check if already loading
    if (this.state.loading) {
      return
    }
    this.loadData()
  }

  getValues = (arr: Media[]): ListViewModel[] => {
    return arr.map(media => new ListViewModel(media.id, media.title.english || media.title.native, media.coverImage.medium, media.coverImage.color))
  }

  render(): React.ReactNode {
    const { results, loading } = this.state
    if (loading && this.getCurrentPage() === 0) {
      return (
        <div className="loading">
          <div className="spinner" />
          <p>Loading</p>
        </div>
      )
    }
    if (!results || !results.data || !results.data.Page || !results.data.Page.media) {
      return (
        <div className="error">
          <p>Sorry, no data available</p>
        </div>
      )
    }
    const values = this.getValues(results.data.Page.media)
    return (
      <div className="list-view-container">
        <ListView values={values} renderCell={RenderListViewCell} loadMore={this.loadMoreData} loadMoreItemsBuffer={10} />
      </div>
    )
  }
}

export default ListViewContainer
