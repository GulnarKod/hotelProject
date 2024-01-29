import{put, call, takeEvery} from 'redux-saga/effects';
import{getDataStart,getDataSuccess, getDataFailure} from '../slice/roomsDataSlice';
import {db} from '../firebase/firebase';
export function* fetchData(){
    try{
        yield put(getDataStart());
        const snapshot=yield call(db.collection('Rooms').get);
        const data=snapshot.docs.map(doc=>({id:doc.id, ...doc.data()}));
        yield put(getDataSuccess(data));
    }catch(error){
        yield put(getDataFailure(error.message))
    }
}

function*  dataSaga(){

yield takeEvery('data/fetchDatafromFirestore',fetchData);
}
export default dataSaga;