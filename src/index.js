import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import init from './Store'

import {headerNav} from './Containers/HeaderNav/action_reducer'
import {coverPhoto} from './Containers/CoverPhoto/action_reducer'
import {product} from './Containers/Product/action_reducer'
import {productListing} from './Containers/ProductListing/action_reducer'


const store = createStore(combineReducers({headerNav, coverPhoto, product, productListing}), init)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
