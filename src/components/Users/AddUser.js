import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from './AddUser.module.css';
import ErrorModal from "../UI/ErrorModal";

// 7. We want to use the ErrorModal when a user enters bad values.
const AddUser = (props) => {
    const [ enteredUsername, setEnteredUsername ] = useState('');
    const [ enteredAge, setEnteredAge ] = useState('');

    // 10. We want to trigger the ErrorModal conditionally, and we'll do this
    //     through an error State. Initialize a new error State and updater.
    const [ errorState, setErrorState ] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();

        // 11. Use and set the errorState upon failing validation for length.
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setErrorState({
                title: 'Invalid input',
                message: 'Please enter valid name and age (empty values not allowed)'
            })
            return;
        }
        // 12. Use and set the errorState upon failing validation for age.
        if ( (enteredAge.match(/^[\d]+$/)) === null || (+enteredAge < 1) ) {
            setErrorState({
                title: 'Invalid input',
                message: 'Please enter valid age (integer greater than 0)'
            })
            return;
        }

        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    }

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    //15. Add an errorHandler to close the ErrorModal by updating the errorState.
    const errorHandler = () => {
        setErrorState(null);
    }

    // 8. Add the modal to the returned AddUser object, wrap everything in a parent div.
    // 13. Only display the ErrorModal if an errorState exists.
    // 14. Use the errorState's title and message.
    // 16. Since the ErrorModal has the Close button, pass in errorHandler via a new prop.
    return (
        <div>
            {errorState &&
                <ErrorModal
                    title={errorState.title}
                    message={errorState.message}
                    onAcknowledged={errorHandler}
                />
            }
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
        </div>
    );
}

export default AddUser;
