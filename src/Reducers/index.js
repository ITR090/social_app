import {combineReducers} from 'redux';
import postReducer from './postsReducer';

const Reducers = combineReducers({
    postReducer,
});

export default Reducers;