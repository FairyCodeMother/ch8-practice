import React, { useState, useRef } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from './AddUser.module.css';
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [ errorState, setErrorState ] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();

        console.log(nameInputRef)
        console.log(ageInputRef)

        const enteredAgeValue = ageInputRef.current.value;
        const enteredNameValue = nameInputRef.current.value;

        if (enteredNameValue.trim().length === 0 || enteredAgeValue.trim().length === 0) {
             setErrorState({
                title: 'Invalid input',
                message: 'Please enter valid name and age (empty values not allowed)'
            })
            return;
        }
        if ( (isNaN(enteredAgeValue)) || (+enteredAgeValue < 1) ) {
            setErrorState({
                title: 'Invalid input',
                message: 'Please enter valid age (integer greater than 0)'
            })
            return;
        }

        props.onAddUser(enteredNameValue, enteredAgeValue);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
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
                        ref={nameInputRef}
                    />
                    <label htmlFor="age">Age (years)</label>
                    <input
                        id="age"
                        type="text"
                        ref={ageInputRef}
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );
}

export default AddUser;
