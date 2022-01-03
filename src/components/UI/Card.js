import React from "react";

// 7a. To style the card we need a Card.module.css file.
import classes from './Card.module.css';

// 6. Return the children of the Card wrapped in a div.
const Card = (props) => {
    // 7b. Then we can use classes to dynamically define the div.
    // 10. Use strong literals to add props.className so we can get
    //     the parent's classname to add.
    return (
        <div className={`${classes.card} ${props.className}`}>
            {props.children}
        </div>
    )
}

// 11. Make a new Button UI component and add the css file.

export default Card;
