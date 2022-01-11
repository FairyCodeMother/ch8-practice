// Task: Manage list of Users via State

import React, {useState} from 'react';
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

// 1. Since App is the lowest level that has access to both the added users and
//    where the users will be displayed, we need to handle the list of users in
//    here. Import useState and initialize the list with an empty array.
function App() {
    const [usersList, setUsersList] = useState([]);

    // 3. Create an addUserHandler that accepts a name and age and appends
    //    that data as a user object to the usersList array.
    const addUserHandler = (userName, userAge) => {

        setUsersList((oldUsersList) => {
            // 4. Create a newUser object with the entered values and a unique id. The unique
            //     id is for the UsersList to use.
            const newUser = { id: Math.random().toString(), name: userName, age: userAge };

            // 5. setUsersList works with arrays so pass in the current array and return
            //    a new array made of the destructured old array with a new user object.
            return [...oldUsersList, newUser]
        })
    }

    // 6. Pass the addUserHandler into AddUser to update State on submission. (go to UsersList)
    // 2. Pass the usersList as a prop into UsersList.
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
