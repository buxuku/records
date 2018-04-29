import { combineReducers } from 'redux';
import selectedReddit from './selectedReddit';
import postByReddit from './postByReddit';

const rootReducers = combineReducers({
    selectedReddit,
    postByReddit
});

export default rootReducers;