import React from "react";
import classes from "./Button.module.css";

// 12. Return a standard button with a dynamic className and
//     a dynamic type. Use "button" if no type is passed.
const Button = (props) => {
    // 13. Add an onClick and pass in the onClick.
    // 14. Dynamically display the label of the button (go to AddUser).
    return (
        <button
            className={classes.button}
            type={props.type || 'button'}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )

}

export default Button;
