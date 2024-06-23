import axios from "axios"
import { useState } from "react";
import { MiRow } from "./MiRow";

const initialUserForm = [
    {
        id: 1,
        username: 34234,
        email: 12345,
        Cantidad: 56768
    },
    {
        id: 2,
        username: 678768,
        email: 67876876,
        Cantidad: 678678768
    },
];

export const UserRow = ({id, username, email}) => {
    const [userSelected, setUserSelected] = useState (initialUserForm);

    async function handleButtonClick2() {
        console.log ("sarasa para mi");

                console.log ("TRACK 1");
                const response = await axios.get ('http://localhost:8080/users2');
                console.log (response);
                console.log (response.data);
        setUserSelected (response.data);
        console.log ("userSelected: ", userSelected);
    }

 

    return (
        <tr>
            <td>
                <button onClick={handleButtonClick2}>
                    Incrementar edad2
                    {
                        //console.log ("userSelected from boton: ", userSelected)
                        userSelected.map (({id, username, email}) => (
                            <MiRow 
                                id={id} 
                                username={username} 
                                email={email}
                            />
                        ))
                    }

                </button>
            </td>
        </tr>

    )
}