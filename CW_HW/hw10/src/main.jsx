import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider } from 'react-router-dom'
import router from './Router.jsx'
import AutoLogin from './auth/AutoLogin.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <AutoLogin>
        <RouterProvider router={router}/>
      </AutoLogin>
    </Provider>
  </StrictMode>,
)
