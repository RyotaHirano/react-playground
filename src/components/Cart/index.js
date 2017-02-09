import React from 'react'
import './style.scss'

import Item from './Item';

export default const Cart = () => {
  return (
    <div className="Cart">
      <Item/>
      <Item/>
    </div>
  )
}
