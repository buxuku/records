import React, {PropTypes} from 'react';

class Counter extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        const {value, increment, decrement} = this.props;
        return (
            <div>
                <p>{value}</p>
                <button onClick={increment}>increment</button>{' '}
                <button onClick={decrement}>decrement</button>
            </div>
        )
    }
}

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired
};
  
export default Counter;