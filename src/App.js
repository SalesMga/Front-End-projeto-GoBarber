import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import Routes from './routes';
import history from './services/history';

import './Config/ReactotronConfig';

import store from './store';

import GLobalStyle from './styles/global';

function App() {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Routes />
                <GLobalStyle />
            </Router>
        </Provider>
    );
}

export default App;
