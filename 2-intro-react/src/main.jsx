import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {HelloWorld}  from './components/HelloWorld.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelloWorld 
      user='2' 
      id={"1"} 
      numero={ '12' } 
      direccion = {{ id: '10', calle:' elm street', number:20}}/>
  </StrictMode>
 
)
