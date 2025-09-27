import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'


import '../public/css/nice-select.css'
import '../public/css/jquery.nice-number.min.css'
import '../public/css/magnific-popup.css'
import '../public/css/bootstrap.min.css'
import '../public/css/font-awesome.min.css'
import '../public/css/default.css'
import '../public/css/style.css'
import '../public/css/responsive.css'
import '../public/js/main.js'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
