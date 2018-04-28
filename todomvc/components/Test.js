import React from 'react';

export default function Test(props) {
    console.log(props);
    return (
        <div onClick={props.actions.showCompleted}>test</div>
    )
}