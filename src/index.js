import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import store from './app/store'
import { Provider } from 'react-redux'

// Wrap app rendering so we can wait for the mock API to initialize
//async function start() {
// Start our mock API server
//await worker.start({ onUnhandledRequest: 'bypass' })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
//}

//start()
