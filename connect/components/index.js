import React from 'react';

function Counter({counter, increment, decrement}) {
    return (
        <div>
            <p>{counter}</p>
            <button onClick={increment}>increment</button>{' '}
            <button onClick={decrement}>decrement</button>{' '}
        </div>
    )
}
export default Counter;