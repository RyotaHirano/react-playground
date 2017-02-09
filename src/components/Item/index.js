import React from 'react'

const Item = props => {
  const {
    title,
    author,
    price
  } = props

  return (
    <div className="Item">
      <h3 className="Item__title">{title}</h3>
      <span className="Item__author">{author}</span>
      <p className="Item__price">{price}円</p>
    </div>
  )
}

Item.propTypes = {
  title:  React.PropTypes.string.isRequired,
  author: React.PropTypes.string.isRequired,
  desc:   React.PropTypes.string.isRequired,
  price:  React.PropTypes.string.isRequired
}

export default Item
