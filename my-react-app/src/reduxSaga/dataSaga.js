import{put, takeEvery} from 'redux-saga/effects';

import{getDatasFetch,getDataSuccess, getDataFailure} from '../slice/roomsDataSlice';
import {db} from '../firebase/firebase';
import{getDocs, collection,} from 'firebase/firestore';
export function* fetchData(){
    try {
        yield put(getDatasFetch());
        // Получаем данные из коллекции "Rooms"
        const querySnapshot = yield getDocs(collection(db, "Rooms"));
        let rooms = [];
        querySnapshot.forEach((doc) => {
         
            rooms.push({...doc.data(), id: doc.id});
        });
    
        yield put(getDataSuccess(rooms));
    } catch(error) {
    
        yield put(getDataFailure(error));
    }
    }


    

function*  dataSaga(){

yield takeEvery('getDatasFetch',fetchData);

}
export default dataSaga;