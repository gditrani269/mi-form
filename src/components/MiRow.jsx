
export const MiRow = ({accion, valor, Cantidad, Saldo_pesos, Saldo_dolares}) => {

    return (
        <tr>
            <td>{ accion}</td>
            <td>{ valor}</td>
            <td>{ Cantidad}</td>
            <td>{ Saldo_pesos}</td>
            <td>{ Saldo_dolares}</td>
        </tr>

    )
}