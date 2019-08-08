import React from 'react'
import { render } from 'react-dom'
import App from './components/App'

const component = <App />
const container = document.querySelector('#root')

render(component, container)
