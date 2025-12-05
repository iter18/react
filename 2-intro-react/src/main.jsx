import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {MyApp}  from './MyApp.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyApp 
      title={"Hola a todos"}
      id={"1"} 
      user= {{ name: 'arturo', email: 'iter_18@gmail.com' }}
      book = {{ title: 'Learn React', author: 'Some Author' }}
      numero={ '12' } 
      direccion = {{ id: '10', calle:' elm street', number:20}}/>
  </StrictMode>
 
)
