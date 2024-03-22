import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { MiForm } from './components/MiForm.jsx'
import { MiForm2} from './components/MiForm2.jsx'
import './index.css'
import { FormItemsView } from './components/FormItemsView.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FormItemsView />
 {/*}   <MiForm />
    <MiForm2 />*/}
  </React.StrictMode>,
)
