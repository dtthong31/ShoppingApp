
import React from 'react';
import { combineReducers, createStore } from 'redux';
import productReducers from './reducers/productReducers';


const rootReducers = combineReducers({ productReducers });
export const store = createStore(rootReducers);