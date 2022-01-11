// UsersList will output our data in the form of an unordered list.
import React from "react";

import Card from "../UI/Card";

import classes from "./UsersList.module.css";

// 3. Wrap the returned item in a Card and set the className to the classes.users
//    from the module.css file. (go to App)
//    Remember: At build the classes are dynamically generated into unique
//              classnames that map to the correct styles.
const UsersList = (props) => {
    // 2. Return an object that displays a new line-item per user from the data,
    //    an array of users, which is passed to us from props. We will call the
    //    props data "users".
    return (
        <Card className={classes.users}>
            <ul>
                {props.users.map((user) => (
                    <li>{user.name} ({user.age} years old)</li>
                ))}

            </ul>
        </Card>
    );
};

export default UsersList;
