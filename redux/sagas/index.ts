import {all} from 'redux-saga/effects'
import { watchJoin, watchLogin } from './userSaga.ts'


export default function* rootSaga(){
    yield all([watchJoin(), watchLogin()])

}

