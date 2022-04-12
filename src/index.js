import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { PageTemplate } from './home-page'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const rootNode = document.getElementById('root')
const root = ReactDOM.createRoot(rootNode)

root.render(<PageTemplate />)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
