// UsersList will output our data in the form of an unordered list.
import React from "react";

import Card from "../UI/Card";

import classes from "./UsersList.module.css";

const UsersList = (props) => {
    // 7. Use the props' id as the key for each child. Each child in a list
    //    must have a unique "key".
    return (
        <Card className={classes.users}>
            <ul>
                {props.users.map((user) => (
                    <li key={user.id}>
                        {user.name} ({user.age} years old)
                    </li>
                ))}

            </ul>
        </Card>
    );
};

export default UsersList;
