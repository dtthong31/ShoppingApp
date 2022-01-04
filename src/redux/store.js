
import React from 'react';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import productReducers from './reducers/productReducers';


const rootReducers = combineReducers({ productReducers });
export const store = createStore(rootReducers, applyMiddleware(thunk));