import React,{ Component } from 'react';
import { connect } from 'react-redux';
import Picker from '../components/Picker';
import { selectedReddit } from '../actions';

class App extends Component{
    constructor(props){
        super(props);
    }
    handleChange = (reddit) => {
        this.props.dispatch(selectedReddit(reddit));
    }
    render() {
        const { selectedReddit } = this.props;
        return (
            <div>
                <Picker
                  value="react"
                  onChange={this.handleChange}
                  options={['react','redux']}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { selectedReddit, postByReddit } = state;
    const {
        isFetching,
        lastUpdated,
        items: posts
    } = postByReddit[selectedReddit] || {
        isFetching: true,
        items: []
    };
    return {
        selectedReddit,
        posts,
        lastUpdated,
        isFetching
    }
}

export default connect(mapStateToProps)(App)