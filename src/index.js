import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { chatReducer } from './store/reducers/chatReducer';
import createSagaMiddleware from 'redux-saga'
import chatSagas from './store/sagas/chatSagas'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    chatStorage: chatReducer
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(sagaMiddleware)
));
sagaMiddleware.run(chatSagas);

const app = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));