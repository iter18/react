import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelloWorld } from './components/HelloWorld.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelloWorld />
  </StrictMode>
 
)
