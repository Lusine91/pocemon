import React from 'react'
import store from './redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import RouteLayout from './routes/route'

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <RouteLayout />
    </Provider>
  </BrowserRouter>
)

export default App
