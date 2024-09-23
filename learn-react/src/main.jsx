import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import AppCounter from './AppCounter.jsx'
import App from './AppPure.jsx'
import './index.css'
import AppPure from './AppPure.jsx'
import AppTodo from './AppTodo.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppCounter />
    {/* <AppTodo/> */}
  </React.StrictMode>
)
