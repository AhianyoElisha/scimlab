import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

// Styles
import './styles/bootstrap.min.css'
import './styles/all.min.css'
import './styles/animate.css'
import './styles/magnific-popup.css'
import './styles/meanmenu.css'
import './styles/swiper-bundle.min.css'
import './styles/nice-select.css'
import './styles/icomon.css'
import './styles/main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
