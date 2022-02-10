import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from './AddUser.module.css';
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
    const [ enteredUsername, setEnteredUsername ] = useState('');
    const [ enteredAge, setEnteredAge ] = useState('');

    const [ errorState, setErrorState ] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();

        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setErrorState({
                title: 'Invalid input',
                message: 'Please enter valid name and age (empty values not allowed)'
            })
            return;
        }
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

    const errorHandler = () => {
        setErrorState(null);
    }

    return (
        <Wrapper>
            {errorState &&
                <ErrorModal
                    title={errorState.title}
                    message={errorState.message}
                    onConfirm={errorHandler}
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
        </Wrapper>
    );
}

export default AddUser;
