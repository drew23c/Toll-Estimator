import { combineReducers } from 'redux';
import mapReducer from './mapReducer';

const allReducers = combineReducers({
    map: mapReducer
})

export default allReducers;