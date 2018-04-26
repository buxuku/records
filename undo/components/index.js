import React from 'react';

function Counter({counter, increment, decrement, incrementIfOdd, incrementSync, undo, redo, incrementDouble}) {
    return (
        <div>
            <p>{counter}</p>
            <button onClick={increment}>increment</button>{' '}
            <button onClick={decrement}>decrement</button>{' '}
            <button onClick={incrementIfOdd}>incrementIfOdd</button>{' '}
            <button onClick={incrementSync}>incrementSync</button>{' '}
            <button onClick={incrementDouble}>incrementDouble</button>{' '}
            <button onClick={undo}>undo</button>{' '}
            <button onClick={redo}>redo</button>{' '}
        </div>
    )
}
export default Counter;