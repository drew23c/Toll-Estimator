import thunk from 'redux-thunk';
import {createStore, compose, applyMiddleware} from 'redux';
import allReducers from '../reducers/allReducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(
    allReducers, 
    initialState, 
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store