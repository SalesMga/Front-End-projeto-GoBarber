import {persistStore} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import createStore from './modules/user/createStore';
import persistReducer from './persistReducer';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import Reactotron from  '../Config/ReactotronConfig';

const sagaMonitor = process.env.NODE_ENV === 'development'
? console.tron.createSagaMonitor()
: null ;

const sagaMiddleware = createSagaMiddleware({sagaMonitor});

const middlewares = [sagaMiddleware];

const store = createStore(persistReducer(rootReducer), middlewares);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
