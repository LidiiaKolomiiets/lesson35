import './styles.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App.jsx';
import reducer from './redusers/reducer.js';
import { configureStore } from '@reduxjs/toolkit';

const rootEl = document.getElementById('root');
const root = ReactDOM.createRoot(rootEl);


const initialState = {
    product: []
}

const store = configureStore({
    reducer,
    preloadedState: initialState
})

root.render(
    <Provider store={store}><App /></Provider>
)