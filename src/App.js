// Task: In reality, React's Fragment component acts like our Wrapper Component.
//       Use Fragment like a Wrapper in here.

import React, {useState, Fragment} from 'react';
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

    // 1. Replace the parent div with React's native Fragment.
    return (
        <Fragment>
            <AddUser
                onAddUser={addUserHandler}
            />
            <UsersList
                users={usersList}
            />
        </Fragment>
    );
}

export default App;
