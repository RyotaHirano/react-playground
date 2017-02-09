import React from 'react'

import ItemList from '../ItemList'

const Container = props => {
  const {
    listItems
  } = props

  return (
    <div className="Container">
      <div className="ItemListArea Container__flex">
        <h2>商品一覧 / 品数: {listItems.length}</h2>
        <ItemList
          items={listItems}
        />
      </div>
    </div>
  )
}

Container.propTypes = {
  listItems: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
}

export default Container
