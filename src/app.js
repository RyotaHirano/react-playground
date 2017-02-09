import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './style.scss'
import data from './data'

import Container from './components/Container'

export default class App extends Component {
  constructor() {
    super()
  }

  render() {
    const {listItems} = this.props

    return (
      <div>
        <Container
          listItems = {listItems}
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
