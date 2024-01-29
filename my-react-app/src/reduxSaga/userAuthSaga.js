import { put, call, takeLatest } from 'redux-saga/effects';
import { setLoginSuccess, setLoginFailure } from '../slice/authSlice';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

function* userLogin(action) {
  try {
    const { email, password } = action.payload;
    const auth = getAuth(); // Вызываем getAuth только один раз
    const userCredential = yield call(signInWithEmailAndPassword, auth, email, password);
    const user = userCredential.user;
    
    yield put(setLoginSuccess({
      email: user.email,
      id: user.uid // Включаем только email и id в состояние
    }));
  } catch (error) {
    yield put(setLoginFailure(error.message));
  }
}

function* userAuthSaga() {
  yield takeLatest('auth/login', userLogin);
}

export default userAuthSaga;
