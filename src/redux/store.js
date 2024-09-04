import { createStore, combineReducers, applyMiddleware } from 'redux';
import inputReducer from './reducers/inputReducer';
import { thunk } from 'redux-thunk';

const rootReducer = combineReducers({
    input: inputReducer, // Combine the inputReducer with other reducers if you have more
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;