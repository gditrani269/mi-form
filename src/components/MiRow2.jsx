import { useContext } from "react"
import { NavLink } from "react-router-dom"
import axios from "axios"
import { LineChart } from './LineChart.jsx'

import React, { useState } from "react";

const data = [0, 10, 5, 2, 20, 30, 45, 8, 251, 33, 121];

export const MiRow2 = ({id, accion, valor, Cantidad, Saldo_pesos, Saldo_dolares}) => {
    
    const [DataHistory, setDataHistory] = useState ();
    const [Flag, setFlag] = useState (0);
    async function handleButtonClick2() {
        console.log ("MiRow2 - handleButtonClick2");
        const ApiHistory = await axios.get ('http://localhost:8081/history/BMA');
    //    console.log (ApiHistory.data);
    //    console.log ("valor: ", ApiHistory.data);
    //    console.log ("length: ", ApiHistory.data.length);
        setDataHistory (ApiHistory.data)
    //    console.log ("DataHistory; ", DataHistory);
        if (Flag == 0) {setFlag (1)}
            else {setFlag (0)};
        const cPaso = "anduvo"
    }

    return (

        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{ accion }</h5>
                    <p className="card-text">Cantidad: { Cantidad }</p>
                    <p className="card-text">valor: { valor }</p>
                    <p className="card-text">Pesos: { Saldo_pesos }</p>
                    <p className="card-text">Dolares: { Saldo_dolares }</p>
                    <button className="btn btn-primary" onClick={handleButtonClick2}
                        >hacer algo</button>
                    {Flag == 1 && (
                                    <LineChart 
                                        valor={DataHistory}
                                        size ={DataHistory.length}/>
                        )
                    }
                </div>
            </div>

        </>

    )
}