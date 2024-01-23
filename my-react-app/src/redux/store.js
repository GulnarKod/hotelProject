import { configureStore } from '@reduxjs/toolkit'
import rootSaga from '../reduxSaga/sagas';
import createSagaMiddleware from 'redux-saga'
import userReducer from '../slice/userSlice';

const sagaMiddleware =createSagaMiddleware();
// mount it on the Store
const store = configureStore({
  reducer:userReducer,
  middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});
// run the saga
sagaMiddleware.run(rootSaga);

export default store;