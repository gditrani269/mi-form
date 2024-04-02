import { Routes, Route, Navigate  } from "react-router-dom";
import { MiForm } from './components/MiForm.jsx'
import { MiForm2 } from './components/MiForm2.jsx'

export const MiRoute = () => {
    return (
    <>
        <div className="container my-4">
            <h3>Cart App</h3>
            <Routes>
                <Route 
                    path="miruta" 
                    element={ <MiForm />}/>

                <Route 
                    path="miruta2" 
                    element={ <MiForm2 />}/>

                <Route 
                    path="/" 
                    element={ <Navigate to={'/'} /> } />

           </Routes>
        </div>
    </>
    )
}
