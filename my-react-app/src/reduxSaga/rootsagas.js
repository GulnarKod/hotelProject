import dataSaga from './dataSaga';
import itemSaga from './itemSaga';
import userAuthSaga from './userAuthSaga';
import {all} from 'redux-saga/effects';
 export default function* rootSaga(){
    yield all([
        dataSaga(),
        userAuthSaga(),
        itemSaga(),
    ]);
 }