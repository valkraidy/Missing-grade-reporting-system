import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'


const domain = import.meta.env.REACT_APP_AUTH0_DOMAIN;

const clientId  = import.meta.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <BrowserRouter>
    <Auth0Provider
    domain = {domain}
    clientId= {clientId}
    redirectUri={window.location.origin}
    >
    <App />
    </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
