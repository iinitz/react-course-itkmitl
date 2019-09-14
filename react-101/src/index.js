import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import App from './App'
import ListMenu from './ListMenu'
import * as serviceWorker from './serviceWorker'

const menuItems = [{ title: 'Menu A', link: '' }, { title: 'Menu B', link: '' }, { title: 'Menu C', link: '' }]

ReactDOM.render(<ListMenu items={menuItems} />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
