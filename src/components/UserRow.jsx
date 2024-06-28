import axios from "axios"
import { useState } from "react";
import { MiRow } from "./MiRow";

const initialUserForm = [
    {
        "id": 1,
        username: 34234,
        email: 12345,
        Cantidad: 567689
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
            <div>    
                <button onClick={handleButtonClick2}>
                    Incrementar edad
                </button>
            </div>  
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>accion</th>
                        <th>valor</th>
                        <th>Cantidad</th>
                        <th>Saldo_pesos</th>
                        <th>Saldo_dolares</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        //console.log ("userSelected from boton: ", userSelected)
                        userSelected.map (({id, accion, valor, Cantidad, Saldo_pesos, Saldo_dolares}) => (
                            <MiRow 
                                key={id}
                                id={id}
                                accion={accion} 
                                valor={valor} 
                                Cantidad={Cantidad}
                                Saldo_pesos={Saldo_pesos}
                                Saldo_dolares={Saldo_dolares} />
                        ))
                    }
                </tbody>
            </table>  
    </>

    )
}