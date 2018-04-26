import React from 'react';

function Counter({counter, increment, decrement, incrementIfOdd, incrementSync}) {
    return (
        <div>
            <p>{counter}</p>
            <button onClick={increment}>increment</button>{' '}
            <button onClick={decrement}>decrement</button>{' '}
            <button onClick={incrementIfOdd}>incrementIfOdd</button>{' '}
            <button onClick={incrementSync}>incrementSync</button>{' '}
        </div>
    )
}
export default Counter;