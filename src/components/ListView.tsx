import React from 'react'
import ReactList from 'react-list'
import { KeyValues } from '../types'
import './ListView.scss'

interface ListViewProps {
  values: Array<KeyValues>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  renderCell?: (values: Array<KeyValues | any>, index: number, key: number | string) => JSX.Element
  loadMore?: () => void
  loadMoreItemsBuffer?: number
}

class ListView extends React.PureComponent<ListViewProps> {
  currentIndex = 0

  componentDidMount(): void {
    const { loadMore } = this.props
    if (loadMore) {
      window.addEventListener('scroll', this.handleScroll)
    }
  }

  componentWillUnmount(): void {
    const { loadMore } = this.props
    if (loadMore) {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }

  countItems = (): number => {
    const { values } = this.props
    return values.length
  }

  handleScroll = (): void => {
    // load more items when scrolling near the end of scroll view
    if (this.props.loadMore && this.countItems() - this.currentIndex < (this.props.loadMoreItemsBuffer || 10)) {
      this.props.loadMore.call(this)
    }
  }

  renderItem = (index: number, key: number | string): JSX.Element => {
    this.currentIndex = index
    const { values, renderCell } = this.props
    const className = index % 2 ? 'item' : 'item even'
    // custom view model renderer
    if (renderCell) {
      return renderCell.call(this, values, index, key)
    }
    // default renderer
    return (
      <div key={key} className={className}>
        <code>{index}</code>
        <h3 className="title">{values[index].name}</h3>
        <p>
          <span>#</span>
          {values[index].id}
        </p>
      </div>
    )
  }

  render(): React.ReactNode {
    return <ReactList length={this.countItems()} type="uniform" itemRenderer={this.renderItem} threshold={500} />
  }
}

export default ListView
