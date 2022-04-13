import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App'

const rootNode = document.getElementById('root')
const root = ReactDOM.createRoot(rootNode)

root.render(<App />)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
