import axios from "axios"

export const UserRow = ({id, username, email}) => {
    
    async function handleButtonClick2() {
        console.log ("sarasa para mi");

                console.log ("TRACK 1");
                const response = await axios.get ('http://localhost:8080/users');
                console.log (response);
                console.log (response.data);


    }

    return (
        <tr>
        <td>{ id}</td>
        <td>{ username}</td>
        <td>{ email}</td>
        <td>
            <button 
                type="button"
                className="btn btn-secondary btn-sm">
                update
            </button>
        </td>
        <td>
            <button onClick={handleButtonClick2}>
                Incrementar edad2
            </button>

        </td>
    </tr>

    )
}