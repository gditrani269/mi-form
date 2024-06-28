import { useContext } from "react"
import { NavLink } from "react-router-dom"

export const MiRow = ({id, accion, valor, Cantidad, Saldo_pesos, Saldo_dolares}) => {

    return (
        <tr>
            <td>{ id}</td>
            <td>{ accion}</td>
            <td>{ valor}</td>
            <td>{ Cantidad}</td>
            <td>{ Saldo_pesos}</td>
            <td>{ Saldo_dolares}</td>
        </tr>
    )
}