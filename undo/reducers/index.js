import { combineReducers } from 'redux';
import undoable, { includeAction } from 'redux-undo';
import counter from './counter';

const rootReducer = combineReducers(
    {counter: undoable(counter, {
        filter: includeAction('DECREMENT'),
        limit: 10,
        debug: true,
        undoType: 'UNDO_INCREMENT',
        redoType: 'REDO_INCREMENT'
    })
    }
)

export default rootReducer;