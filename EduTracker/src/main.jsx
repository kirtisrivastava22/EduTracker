import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Navbar from './navbar.jsx'
import About from './About.jsx'
import './index.css'
createRoot(document.getElementById('root')).render(
<>  <Navbar />
<About/></>
  

)
