import React from 'react'
import PropTypes from 'prop-types'
import logo from './logo.svg'
import './App.css'

const App = props => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Hello, {props.name}!!, {props.num}
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
)
App.propTypes = {
  name: PropTypes.string.isRequired,
  num: PropTypes.number,
}
App.defaultProps = {
  num: 100,
}

export default App
