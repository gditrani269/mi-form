
export const MiRow = ({id, username, email}) => {

    return (
        <tr>
        <td>{ id}</td>
        <td>{ username}</td>
        <td>{ email}</td>
        <td>
            <button 
                type="button"
                className="btn btn-secondary btn-sm">
                update2
            </button>
        </td>

    </tr>

    )
}