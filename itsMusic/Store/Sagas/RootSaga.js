import { takeLatest, all } from 'redux-saga/effects'; 
import { GOOGLE_SIGN_IN } from '../Actions/AuthAction';
import { handleGoogleSignIn } from '../Sagas/Handlers/AuthHandler'

export function* watcherSaga() {
    console.log("Watcher Saga");
    yield all([
        yield takeLatest(GOOGLE_SIGN_IN, handleGoogleSignIn)
    ]);
};