import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

// 2. Split the modal into two parts:
//    Make a Backdrop that gets the backdrop div with the onClick event
const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

// 3. And make a ModalOverlay that gets the Card
const ModalOverlay = (props) => {
    return <Card className={classes.modal}>
        <header className={classes.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
            <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
            <Button onClick={props.onConfirm}>Close</Button>
        </footer>
    </Card>;
};

// 4. Add an expression where the modal was and call ReactDOM.createPortal()
//    with the Backdrop and the target element where it will be rendered.
// 5. Do the same for ModalOverlay
const ErrorModal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal
                (<Backdrop onConfirm={props.onConfirm} />,
                document.getElementById("backdrop-root"))
            }
            {ReactDOM.createPortal(
                <ModalOverlay title={props.title}
                              message={props.message}
                              onConfirm={props.onConfirm} />,
                document.getElementById("overlay-root"))
            }
        </Fragment>
    );
};

export default ErrorModal;
