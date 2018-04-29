import React,{ Component } from 'react';
import { connect } from 'react-redux';
import Picker from '../components/Picker';
import { selectedReddit, fetchPostIfNeeded } from '../actions';
import Posts from '../components/Posts';

class App extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount() {
        const {dispatch, selectedReddit} = this.props;
        dispatch(fetchPostIfNeeded(selectedReddit));
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.selectedReddit !== this.props.selectedReddit) {
            const {dispatch, selectedReddit} = nextProps;
            dispatch(fetchPostIfNeeded(selectedReddit));
        }
    }
    handleChange = (reddit) => {
        this.props.dispatch(selectedReddit(reddit));
    }
    render() {
        const { selectedReddit,posts } = this.props;
        return (
            <div>
                <Picker
                  value={selectedReddit}
                  onChange={this.handleChange}
                  options={['reactjs','frontend']}
                />
                <Posts
                  items={posts}
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