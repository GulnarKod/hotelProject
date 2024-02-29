import { put, takeEvery } from 'redux-saga/effects';
import { fetchLogin,loginSuccess, loginFailure,logout } from '../slice/authSlice';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
function* userLogin(action){
try{
  yield put(fetchLogin());
  const{email, password}= action.payload;
const auth= getAuth();
    const userCredential=yield signInWithEmailAndPassword(auth, email, password);
   console.log(userCredential)
    const user= userCredential;
    yield put(loginSuccess(user)); 
    
  } catch (error) {
    const errorMessage = error.message;
    yield put(loginFailure(errorMessage)); 
  }
}
function* userLogout(){

  const authentification = getAuth();
  yield signOut(authentification);

    yield put(logout());
}

function* userAuthSaga() {
  yield takeEvery('login', userLogin);
  yield takeEvery ('logout', userLogout);
}

export default userAuthSaga;
