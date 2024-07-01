import { UserForm } from "./components/UserForm";
import { UsersList } from "./components/UserList";
import { UserRow } from "./components/UserRow";

export const UsersApp = () => {
    
    return (
        <>
            <div className="container">
                <h3>Users App2</h3>
                <UserRow/>
            </div>
        </>
    );
}