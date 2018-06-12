import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import CreateForm from './Containers/DynamicForm/CreateForm';
import registerServiceWorker from './registerServiceWorker';
// import '../node_modules/popper.js/dist/popper'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {CreateFormReducer} from './Reducers/DynamicForm/CreateForm'
// import init from './Store'

// import {headerNav} from './Containers/HeaderNav/action_reducer'

const store = createStore(CreateFormReducer)

ReactDOM.render(
    <Provider store={store}>
        <CreateForm />
    </Provider>
    , document.getElementById('rootContent'));
registerServiceWorker();
