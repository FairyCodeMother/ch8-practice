import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from './AddUser.module.css';

const AddUser = (props) => {
    const [ enteredUsername, setEnteredUsername ] = useState('');
    const [ enteredAge, setEnteredAge ] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 ||
            enteredAge.trim().length === 0 ||
            +enteredAge < 1 ) {
            return;
        }
        setEnteredUsername('');
        setEnteredAge('');
        console.log(enteredUsername, ": ", enteredAge);
    }

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

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
