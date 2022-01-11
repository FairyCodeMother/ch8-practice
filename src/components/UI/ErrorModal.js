import React from "react";
import Card from "./Card";
import Button from "./Button";

// 5. Import the classes from the ErrorModal's css module to dynamically
//    add classNames and styles.
import classes from "./ErrorModal.module.css";

// 2. The ErrorModal will return a Card.
const ErrorModal = (props) => {
    // 3. The Card has sections: header, footer, and main content.
    // 4. The Header and body accepts passed values. The footer will
    //    have a Button to close the modal.
    // 6. Add the modal, header, content and actions classes as classNames.
    // 9. We need a backdrop that keeps us from interacting with the page
    //    when the modal is visible. Add a backdrop div above Card. Wrap
    //    everything in a parent div.
    // 17. Let the user close the Modal when they click either the background
    //     or Close button by passing onAcknowledged into their onClick handlers.
    return (
        <div>
            <div className={classes.backdrop} onClick={props.onAcknowledged} />
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={props.onAcknowledged}>Close</Button>
                </footer>
            </Card>
        </div>
    );
};

export default ErrorModal;
