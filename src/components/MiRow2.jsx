import { useContext } from "react"
import { NavLink } from "react-router-dom"

export const MiRow2 = ({id, accion, valor, Cantidad, Saldo_pesos, Saldo_dolares}) => {

    return (

        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{ accion }</h5>
                    <p className="card-text">{ valor }</p>
                    <p className="card-text">{ Cantidad }</p>
                    <p className="card-text">{ Saldo_pesos }</p>
                    <p className="card-text">{ Saldo_dolares }</p>
                    <button className="btn btn-primary"
                        >hacer algo</button>
                </div>
            </div>

        </>

    )
}