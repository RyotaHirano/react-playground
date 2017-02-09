import React from 'react'

import ItemList from '../ItemList'
import Cart from '../Cart'
import {calcTotalByItems} from '../../util'

const Container = props => {
  const {
    listItems,
    cartItems,
    addToCart,
    removeFromCart
  } = props

  return (
    <div className="Container">
      <div className="ItemListArea Container__flex">
        <h2>商品一覧 / 品数: {listItems.length}</h2>
        <ItemList
          items={listItems}
          addToCart={addToCart}
        />
      </div>

      <div className="CartArea">
        <h4>カート</h4>
        <Cart
          items={cartItems}
          removeFromCart={removeFromCart}
        />
        <div className="Total">
          計{cartItems.length}点
          <span className="Total__price">{calcTotalByItems(cartItems)}円</span>
        </div>
      </div>
    </div>
  )
}

Container.propTypes = {
  listItems: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  cartItems: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  addToCart: React.PropTypes.func.isRequired,
  removeFromCart: React.PropTypes.func.isRequired
}

export default Container
