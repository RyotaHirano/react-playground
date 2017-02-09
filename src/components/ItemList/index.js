import React from 'react'

import Item from '../Item'

const ItemList = props => {
  const {
    items
  } = props

  return (
    <ul className="ItemList">
      {
        items.map((item, i) => {
          return (
            <li className="ItemList__item" key={i}>
              <Item
                {...item}
              />
            </li>
          )
        })
      }
    </ul>
  )
}

ItemList.propTypes = {
  items: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
}

export default ItemList
