import React from 'react'
import ReactDOM from 'react-dom/client' // Import the whole object as ReactDOM
import App from './App.jsx'
import './index.css'

// We use ReactDOM.createRoot here
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)