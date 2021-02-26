import {call, put} from 'redux-saga/effects';
import { signIn } from '../../ducks/user';
import { requestGetUser } from '../requests/user';

export function* handleGetUser(action){
    try {
        const res = yield call(requestGetUser);
        const {data} = res;
        yield put(signIn(data))
    } catch (error){
        console.log(error);
    }
}