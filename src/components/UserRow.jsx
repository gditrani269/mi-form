import axios from "axios"
import { useState } from "react";
import { MiRow } from "./MiRow";

const initialUserForm = [
    {
        "id": 1,
        username: 34234,
        email: 12345,
        Cantidad: 56768
    },
    {
        "id": 2,
        username: 678768,
        email: 67876876,
        Cantidad: 678678768
    }
];

export const UserRow = () => {
    const [userSelected, setUserSelected] = useState (initialUserForm);

    async function handleButtonClick2() {
       console.log ("handleButtonClick2");
        const response = await axios.get ('http://localhost:8080/users');
//       console.log (response);
//       console.log (response.data);
        setUserSelected (response.data);
    }

    return (
<>
                
                <button onClick={handleButtonClick2}>
                    Incrementar edad2
                </button>
                

                    <td>
                        <th>accion</th>
                        <th>valor</th>
                        <th>Cantidad</th>
                        <th>Saldo_pesos</th>
                        <th>Saldo_dolares</th>
                    </td>
                
                <tbody>
                    {
                        //console.log ("userSelected from boton: ", userSelected)
                        userSelected.map (({accion, id, valor, Cantidad, Saldo_pesos, Saldo_dolares}) => (
                            <MiRow 
                                key={id}
                                accion={accion} 
                                valor={valor} 
                                Cantidad={Cantidad}
                                Saldo_pesos={Saldo_pesos}
                                Saldo_dolares={Saldo_dolares}
                            />
                        ))
                    }
                </tbody>

                </>

    )
}