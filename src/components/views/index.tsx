import React from 'react'
import ListViewModel from './models'

const ListViewRenderer = (values: ListViewModel[], index: number, key: number | string): JSX.Element => {
  const className = index % 2 ? 'item' : 'item even'
  const item = values[index]
  return (
    <div key={key} className={className}>
      <img key={index} src={item.image} alt={item.name} style={{ backgroundColor: item.color }} />
      <div className="content">
        <h3 className="title" title={String(item.id)}>
          {item.name}
        </h3>
        <code>{index}</code>
      </div>
    </div>
  )
}

export default ListViewRenderer
