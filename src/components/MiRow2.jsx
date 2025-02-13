import { useContext } from "react"
import { NavLink } from "react-router-dom"

import { MiTabla } from './MiTabla.jsx'

import React, { useState } from "react";

export const MiRow2 = ({id, accion, valor, Cantidad, Saldo_pesos, Saldo_dolares}) => {

    const [Flag, setFlag] = useState (0);
    async function handleButtonClick2() {
        console.log ("MiRow2 - handleButtonClick2");
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
                            <tr><td>
                                <div className="card">
                                    <div className="card-body">
                                        cata
                                    </div>
                                </div>
                                </td></tr>
                        )
                        }
                </div>
            </div>

        </>

    )
}