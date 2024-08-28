import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './assets/template/vendors/core/core.css'
import './assets/template/fonts/feather-font/css/iconfont.css'
import './assets/template/vendors/flag-icon-css/css/flag-icon.min.css'
import './assets/template/css/demo1/style.css'
import './assets/template/images/favicon.png'
import "bootstrap/dist/js/bootstrap.bundle.min.js";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
