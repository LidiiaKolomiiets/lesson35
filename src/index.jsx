import './styles.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App.jsx';
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './reducers/reducer.js';

const rootEl = document.getElementById('root');
const root = ReactDOM.createRoot(rootEl);

const store = configureStore({
    reducer: {
        products: productReducer,
    },
});

root.render(
    <Provider store={store}><App /></Provider>
)