import React, { useState, useRef } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from './AddUser.module.css';
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

// 1. Add useRef hooks to AddUser for name and age inputs.
const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    // 8a. Remove the State stuff: the hooks and Handlers.
    //    useState calls removed...

    const [ errorState, setErrorState ] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();

        // 3. Console out the refs so we can see what they contain:
        //    { current: input#element-id } where the value is the ACTUAL DOM node
        //    and we can call out values within this object.
        console.log(nameInputRef)
        console.log(ageInputRef)

        // 4. Store the current value of both Refs. This gives us the value
        //    without tracking State!
        const enteredAgeValue = ageInputRef.current.value;
        const enteredNameValue = nameInputRef.current.value;

        // 5. We can replace the enteredUsername and enteredAge in our validation.
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

        // 6. Pass the refs into the onAddUser handler, eliminating our use of the State.
        // 7. Remove the State setters. Refs are being updated outside the State now.
        props.onAddUser(enteredNameValue, enteredAgeValue);
        // 9. By removing the State Handlers, we lost the ability to update the form fields.
        //    We can manually change the Ref values safely since it's not changing the value
        //    for use. Refs use less code but requires hacky manual resetting.
        //    NOTE: Doing this only updates the DOM element and NOT THE ACTUAL VALUE!!!
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    }

    // 8b. Remove the State stuff: the hooks and Handlers.
    //    Handlers removed...

    const errorHandler = () => {
        setErrorState(null);
    }

    // 2. Connect the HTML elements with their corresponding refs.
    // 8C. Remove the State stuff from the elements.
    //    onChange Handlers removed...
    //    Elements are no longer using React to handle their internal state,
    //    which converts these from Controlled to Uncontrolled Components.
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
