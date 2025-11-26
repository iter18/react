import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//const h1 = React.createElement('h1', null, 'Hello, world!');
//forma mas compleja de crear elementos en react
const h1 = React.createElement('ul', null, 
                                  React.createElement('li', null, 'item 1'), 
                                  React.createElement('li', null, 'item 2'), 
                                  React.createElement('li', null, 'item 3'));

//Forma usando JSX
const h2 = <div ><ul>
                  <li>item 1</li>
                  <li>item 2</li>
                </ul></div>

createRoot(document.getElementById('root')).render(
  //<StrictMode>
    //<App />
  //</StrictMode>,
  h2
)
