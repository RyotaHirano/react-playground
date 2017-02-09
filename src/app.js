import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './style.scss'
import data from './data'

import Container from './components/Container'

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      cartItems: []
    }

    this._addToCart = this._addToCart.bind(this)
    this._removeFromCart = this._removeFromCart.bind(this)
  }

  _addToCart(item) {
    const newCartItems = this.state.cartItems.slice()
    newCartItems.push(item)

    this.setState({
      cartItems: newCartItems
    })
  }

  _removeFromCart(index) {
    const newCartItems = this.state.cartItems.slice()
    newCartItems.splice(index, 1)

    this.setState({
      cartItems: newCartItems
    })
  }

  render() {
    const {listItems} = this.props
    const {cartItems} = this.state

    return (
      <div>
        <Container
          listItems = {listItems}
          cartItems = {cartItems}
          addToCart = {this._addToCart}
          removeFromCart = {this._removeFromCart}
        />
      </div>
    )
  }
}

App.propTypes = {
  listItems: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
}

const app = document.getElementById('app')
ReactDOM.render(<App listItems={data} />, app)
