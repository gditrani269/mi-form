import axios from "axios"
import { useState } from "react";
import { MiRow } from "./MiRow";
import { MiRow2 } from "./MiRow2";

/*
npm i @mui/material
npm i @emotion/styled
npm i @mui/styled-engine
*/
import React, { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
const initialUserForm = [
    {
        "id": 1,
        username: 34234,
        email: 12345,

        accion: 'MOLA',
        valor: '22000',
        Cantidad: '441',
        Saldo_pesos: '8888888',
        Saldo_dolares: '6700'
    },
    {
        "id": 2,
        username: 678768,
        email: 67876876,

        accion: 'MSFT',
        valor: '21000',
        Cantidad: '500',
        Saldo_pesos: '12000000',
        Saldo_dolares: '9000'
    },
    {
        "id": 3,
        username: 678768,
        email: 67876876,

        accion: 'BMA',
        valor: '7400',
        Cantidad: '2050',
        Saldo_pesos: '16000000',
        Saldo_dolares: '11000'
    },
    {
        "id": 4,
        username: 678768,
        email: 67876876,

        accion: 'BMA',
        valor: '7400',
        Cantidad: '2050',
        Saldo_pesos: '16000000',
        Saldo_dolares: '11000'
    },
    {
        "id": 5,
        username: 678768,
        email: 67876876,

        accion: 'BMA',
        valor: '7400',
        Cantidad: '2050',
        Saldo_pesos: '16000000',
        Saldo_dolares: '11000'
    },
    {
        "id": 6,
        username: 678768,
        email: 67876876,

        accion: 'GGAL',
        valor: '7400',
        Cantidad: '2050',
        Saldo_pesos: '16000000',
        Saldo_dolares: '11000'
    }
];

export const UserRow = () => {
    const [userSelected, setUserSelected] = useState (initialUserForm);

    //isLoading define en que momento se muestra el componente de avance
    const [isLoading, setIsLoading] = useState(false);

    async function handleButtonClick2() {
       console.log ("handleButtonClick2");
        //hace que el componente de avance sea visible
        setIsLoading(true);
        const response = await axios.get ('http://localhost:8080/users');
//       console.log (response);
//       console.log (response.data);
        setUserSelected (response.data);
        //oculta el componente de avance
        setIsLoading(false);
    }

    return (
    <>
        <div>    
            <button onClick={handleButtonClick2}>
                Actualizar valores
            </button>
        </div>  
        <div className="row">
            {isLoading && (
                <h3><CircularProgress color="secondary" /></h3>
            )}
 
            {!isLoading && (
                <h3>Successfully API Loaded Data</h3>
            )}
        {
            //console.log ("userSelected from boton: ", userSelected)
            userSelected.map (({id, accion, valor, Cantidad, Saldo_pesos, Saldo_dolares}) => (
                <div className="col-4 my-2" key={ id }>
                    <MiRow2 
                        id={id}
                        accion={accion} 
                        valor={valor} 
                        Cantidad={Cantidad}
                        Saldo_pesos={Saldo_pesos}
                        Saldo_dolares={Saldo_dolares} />
                </div>
            ))
        }                
        </div>
    </>

    )
}
