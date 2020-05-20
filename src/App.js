import React from 'react';
import { Router } from 'react-router-dom';

import Routes from './routes';
import history from './services/history';

import './Config/ReactotronConfig';
import GLobalStyle from './styles/global';

function App() {
    return (
        <Router history={history}>
            <Routes />
            <GLobalStyle />
        </Router>
    );
}

export default App;
