import { configureStore } from '@reduxjs/toolkit'
import rootSaga from '../reduxSaga/rootsagas';
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../redusers/rootReducer';
const sagaMiddleware= createSagaMiddleware()
const store = configureStore({
  reducer:rootReducer,
  middleware:(getDefaultMiddleware) => getDefaultMiddleware({thunk:false}).concat(sagaMiddleware),
});
// run the saga
sagaMiddleware.run(rootSaga);

export default store;