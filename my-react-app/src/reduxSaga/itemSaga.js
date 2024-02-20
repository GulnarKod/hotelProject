import{put, takeEvery} from 'redux-saga/effects';
import{getCurrentItemFetch, getCurrentItemSuccess, getCurrentItemFailure} from '../slice/roomsDataSlice';
import {db} from '../firebase/firebase';
import{getDoc, doc} from 'firebase/firestore';

export function* fetchSingleData(action) {
    try {
        yield put(getCurrentItemFetch());
        const { id } = action.payload;
        const docRef = doc(db, "Rooms", id);
        const docSnap = yield getDoc(docRef);
        if (docSnap.exists()) {
            const singleData = { ...docSnap.data(), id: docSnap.id };
            // console.log("Single data fetched:", singleData);
            yield put(getCurrentItemSuccess(singleData));
        } else {
            yield put(getCurrentItemFailure("Document does not exist"));
        }
    } catch (error) {
        yield put(getCurrentItemFailure(error));
    }
}

function* itemSaga() {
    yield takeEvery('getSingleData', fetchSingleData);
}

export default itemSaga;
