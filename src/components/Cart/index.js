import React from 'react'

import Item from '../Item'

const Cart = props => {
  const {
    items,
    removeFromCart
  } = props

  let cartContent
  if(items.length !== 0) {
    cartContent = items.map((item, i) => {
      return (
        <Item
          key={i}
          {...item}
          btnLabel="カートから出す"
          onClickBtn={() => { removeFromCart(i) }}
        />
      )
    })
  } else {
    cartContent = <span>カートに商品がありません</span>
  }

  return (
    <div className="Cart">
      {cartContent}
    </div>
  )
}

Cart.propTypes = {
  items: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  removeFromCart: React.PropTypes.func.isRequired
}

export default Cart
