import { combineReducers } from 'redux';
import undoable from 'redux-undo';
import counter from './counter';

const rootReducer = combineReducers(
    {counter: undoable(counter, {
        limit: 10,
        debug: true,
        undoType: 'UNDO_INCREMENT',
        redoType: 'REDO_INCREMENT'
    })
    }
)

export default rootReducer;