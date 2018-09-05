
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import rateQuote from './rateQuote'


const reducer = combineReducers({ rateQuote });

const middleware = applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }));
const store = createStore(reducer, middleware);

export default store;
export * from './rateQuote';