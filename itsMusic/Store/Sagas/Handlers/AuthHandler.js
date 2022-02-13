import {call, put} from 'redux-saga/effects';
import { googleSignIn } from '../../Actions/AuthAction';
import auth from '@react-native-firebase/auth';
import { requestGoogleSignIn } from '../Requests/AuthRequest';

export function* handleGoogleSignIn() {
    try {
        const response = yield call(requestGoogleSignIn);
        const { user } = response;
        console.log("Data after google sign in: ", user);
    } catch(error) {
        console.log("Error occured in google sign in: ", error);
    }
}