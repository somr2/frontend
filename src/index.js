import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import CreateForm from './Containers/DynamicForm/CreateForm';
import registerServiceWorker from './registerServiceWorker';
// import '../node_modules/popper.js/dist/popper'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {CreateFormReducer} from './Reducers/DynamicForm/CreateForm'

import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';
// import init from './Store'

// import {headerNav} from './Containers/HeaderNav/action_reducer'

const store = createStore(CreateFormReducer, composeWithDevTools(
    applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
        <CreateForm />
    </Provider>
    , document.getElementById('rootContent'));
registerServiceWorker();
