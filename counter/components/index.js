import React, {PropTypes} from 'react';

class Counter extends React.Component{
    constructor(props) {
        super(props);
    }
    incrementIfOdd = () => {
        if(this.props.value % 2 === 0) return;
        this.props.increment();
    }
    incrementSync = () => {
        setTimeout(this.props.increment, 1000);
    }
    render() {
        const {value, increment, decrement} = this.props;
        return (
            <div>
                <p>{value}</p>
                <button onClick={increment}>increment</button>{' '}
                <button onClick={decrement}>decrement</button>{' '}
                <button onClick={this.incrementIfOdd}>incrementIfOdd</button>{' '}
                <button onClick={this.incrementSync}>incrementSync</button>{' '}
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