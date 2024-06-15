import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { MiRoute } from './MiRoute.jsx'
import './index.css'
import { FormItemsView } from './components/FormItemsView.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Red } from './Red.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
  {/*}  <FormItemsView />*/}
  {/*<MiRoute />*/}
  <Red />
 {/*}   <MiForm />
    <MiForm2 />*/}
    </BrowserRouter>
  </React.StrictMode>,
)
