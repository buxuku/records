import React from 'react';

export default function Test(props) {
    console.log(props);
    return (
        <div>
        <div onClick={props.actions.showCompleted}>test</div>
        <div onClick={props.actions.showAll}>show all</div>
        </div>
    )
}