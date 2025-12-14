import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// 處理 404.html 的重定向
const params = new URLSearchParams(window.location.search)
const redirect = params.get('redirect')
if (redirect) {
  window.history.replaceState(null, null, redirect)
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
