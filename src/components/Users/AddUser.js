import React from "react";

// 8. Import Card and surround the form in it.
import Card from "../UI/Card";
import Button from "../UI/Button";

// 9a. Import the classes from the AddUser css.
import classes from './AddUser.module.css';

// 2. Make a form component that takes user inputs: username, age.
const AddUser = (props) => {
    // 3a. The submission requires a Handler...
    const addUserHandler = (event) => {
        // 3b. The default for onSubmit is to reload the page so
        //     we use the preventDefault() method.
        event.preventDefault();
    }

    // 9b. Use the classes to name a dynamic className. Now we have
    //     css getting applied and getting passed into props. (go to Card)
    // 15. Import and update the button to use our Button.
    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" />
                <label htmlFor="age">Age (years)</label>
                <input id="age" type="text" />
                <Button
                    className={}
                    type="submit"
                    onClick={}
                >Add User</Button>
            </form>
        </Card>
    );
}

export default AddUser;
