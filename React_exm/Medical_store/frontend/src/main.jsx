import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
//import './index.css'
import App from './App.jsx'
import './styles/Global.css';
import { RouterProvider } from 'react-router-dom'
import router from './Router.jsx'
import store from './store/store.js'
import { Provider } from 'react-redux';
import AutoLogin from './components/AutoLogin.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <AutoLogin>
        <RouterProvider router={router} />
      </AutoLogin>
    </Provider>
  </StrictMode>,
)