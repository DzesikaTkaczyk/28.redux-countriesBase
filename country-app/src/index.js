import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import DevTools from './DevTools';

import store from './store';

render(
    <Provider store={store}>
    	<div>
        	<h1>Inicjalizacja projektu</h1>
        	<DevTools />
        </div>	
    </Provider>,
    document.getElementById('root')
);