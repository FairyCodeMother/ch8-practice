import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from './AddUser.module.css';

// 2. Import the useState Hook and initialize it. Make one for
//    the Username and another for Age. Since we want a different
//    state for each Username we'll start with an empty string.
const AddUser = (props) => {
    const [ enteredUsername, setEnteredUsername ] = useState('');
    const [ enteredAge, setEnteredAge ] = useState('');

    // 5a. Use the new State setters in the addUserHandler to empty out the State.
    const addUserHandler = (event) => {
        event.preventDefault();
        setEnteredUsername('');
        setEnteredAge('');
        // 5b. Console out the updated Username and Age as proof- console shows update
        //     but input fields stay unchanged.
        console.log(enteredUsername, ": ", enteredAge);
    }

    // 3. Create a changeHandler for Username and Age.
    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    // 4. Update the input tags to have the new changeHandlers.
    // 6. Route the updated Username & Age from addUserHandler
    //    back into the input fields using the values prop.
    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    type="text"
                    onChange={usernameChangeHandler}
                    value={enteredUsername}
                />
                <label htmlFor="age">Age (years)</label>
                <input
                    id="age"
                    type="text"
                    onChange={ageChangeHandler}
                    value={enteredAge}
                />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
}

export default AddUser;
