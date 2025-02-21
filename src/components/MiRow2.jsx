import { useContext } from "react"
import { NavLink } from "react-router-dom"
import axios from "axios"
import { LineChart } from './LineChart.jsx'

import React, { useState } from "react";

const data = [0, 10, 5, 2, 20, 30, 45, 8, 251, 33, 121];

const { username } = "LoginForm";
const initFecha = { F_inicio: '2024-10-01', F_final: '2024-11-01' }

export const MiRow2 = ({id, accion, valor, Cantidad, Saldo_pesos, Saldo_dolares, Fecha}) => {
    console.log ("---++++++------ MIROW2 ----+++++----");
    const [DataHistory, setDataHistory] = useState ();
    const [Flag, setFlag] = useState (0);
    const [fechaQuery, setFechaQuery ] = useState (initFecha);

    //const { F_inicio, F_final } = Fecha;

    console.log ("fechaQuery: ", fechaQuery);
    const { F_inicio, F_final } = fechaQuery;

    async function handleButtonClick2() {
        console.log ("MiRow2 - handleButtonClick2");
        console.log ("MiRow2 - handleButtonClick2 - accion seleccionada: ", accion);
        console.log ("F_inicio: ", F_inicio);
        console.log ("F_final: ", F_final);
    //    const ApiHistory = await axios.get ('http://localhost:8081/history/BMA');
        const ApiHistory = await axios.get ('http://127.0.0.1:8081/history/?accion='+accion+'&f_inicio='+F_inicio+'&f_final='+F_final);
    //    console.log (ApiHistory.data);
    //    console.log ("valor: ", ApiHistory.data);
    //    console.log ("length: ", ApiHistory.data.length);
        setDataHistory (ApiHistory.data)
    //    console.log ("DataHistory; ", DataHistory);
        if (Flag == 0) {setFlag (1)}
            else {setFlag (0)};
        const cPaso = "anduvo"
    }

    const onInputChange = ({target}) => {
        console.log ("MiRow2 - onInputChange CALENDAR");
        const {name, value} = target;
        console.log ("name: ", name)
        console.log (value)
        setFechaQuery ({
            ...fechaQuery,
            [name]: value,
        })     
        console.log ("fechaQuery: ", fechaQuery)  
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
                    <h5 className="card-title">Calendar</h5>
                                            <form>
                                                <input 
                                                    className="form-control my-3 w-75"
                                                    placeholder="Inicial"
                                                    name="F_inicio"
                                                    value={username}
                                                    onChange={ onInputChange }/>
                                                <input 
                                                    className="form-control my-3 w-75"
                                                    placeholder="Final"
                                                    name="F_final"
                                                    value={username}
                                                    onChange={ onInputChange }/>
                                            </form>
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