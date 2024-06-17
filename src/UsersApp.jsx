import { UserForm } from "./components/UserForm";
import { UsersList } from "./components/UserList";

export const UsersApp = () => {
    const initialUsers = [
        {
            id: 1,
            username: 'pepe',
            password: '12345',
            email: 'pepe@correo.com'
        },
        {
            id: 2,
            username: 'ger',
            password: '12345',
            email: 'ger@correo.com'
        },
    ];
    
    
    return (
        <div className="container my-4">
            <h2>Users App</h2>
            <div className="row">
                <div className="col">
                    <UserForm />
                </div>
                <div className="col">
                    <UsersList users={ initialUsers }/>
                </div>
            </div>
        </div>
    );
}