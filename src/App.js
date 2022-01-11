// Task: Add ErrorModal Component
// 1. Create an ErrorModal UI component.

import React, {useState} from 'react';
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
    const [usersList, setUsersList] = useState([]);

    const addUserHandler = (userName, userAge) => {

        setUsersList((oldUsersList) => {
            const newUser = {
                id: Math.random().toString(),
                name: userName,
                age: userAge
            };

            return [...oldUsersList, newUser]
        })
    }

    return (
        <div>
            <AddUser
                onAddUser={addUserHandler}
            />
            <UsersList
                users={usersList}
            />
        </div>
    );
}

export default App;
