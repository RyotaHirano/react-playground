import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './style.scss'

export default class HelloWorld extends Component {
  constructor() {
    super()
  }

  render() {
    const {target} = this.props
    return (
      <div>
        <h1>{target}</h1>
      </div>
    )
  }
}

HelloWorld.defaultProps = {
  target: 'HelloWorld!'
}

HelloWorld.propTypes = {
  target: React.PropTypes.string
}

const app = document.getElementById('app')
ReactDOM.render(<HelloWorld/>, app)
