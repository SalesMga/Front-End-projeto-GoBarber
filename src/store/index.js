import createSagaMiddleware from 'redux-saga';
import createStore from './modules/createStore';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import Reactotron from '../Config/ReactotronConfig';

const sagaMonitor = process.env.NODE_ENV === 'development'
? console.tron.createSagaMonitor()
: null;

const sagaMiddleware = createSagaMiddleware({sagaMonitor});

const middlewares = [sagaMiddleware];

const store = createStore(rootReducer, middlewares);

sagaMiddleware.run(rootSaga);

export default store;
