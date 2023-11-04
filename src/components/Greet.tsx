
import React from 'react'

type GreetProps = {
    name: string,
    messageCount?: number, //? to make it optional
    isLoggedIn: boolean
}

const Greet = (props: GreetProps) => {
    const { messageCount = 0 } = props;
    return (
        <>
            {props.isLoggedIn ? (
                <div>Welcome {props.name}, you have {messageCount} unread message in typescript</div>
            ) : "welcome user"}
        </>
    )
}

export default Greet