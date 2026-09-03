import React from "react";

function WelcomeMessage(props) {
    return (
        <>
        <h1>Welcome {props.name}</h1>
        <p>This is my practice session number {props.number}</p>
        </>
    );
}

export default WelcomeMessage 