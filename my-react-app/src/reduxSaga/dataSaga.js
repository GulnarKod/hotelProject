import{put, takeEvery} from 'redux-saga/effects';
import{getDatasFetch,getDataSuccess, getDataFailure} from '../slice/roomsDataSlice';
import {db} from '../firebase/firebase';
import{getDocs, collection} from 'firebase/firestore'
export function* fetchData(){
    
    try{
        yield put(getDatasFetch());
        const querySnapshot = yield (getDocs(collection(db, "Rooms")));
        let rooms = [];
        querySnapshot.forEach((item) => {
            rooms.push({...item.data(), id: item.id});
        });
            yield put(getDataSuccess(rooms));
        } catch(error) {
            yield put(getDataFailure(error));
        }
    
    }

function*  dataSaga(){

yield takeEvery('data/getDatasFetch',fetchData);
}
export default dataSaga;