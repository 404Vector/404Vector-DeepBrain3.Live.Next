/*
import { all } from 'redux-saga/effects';
import { watchJoin } from "./userSaga.ts";

export default function* rootSaga() {
    yield all([watchJoin()]);
}
 */
import { all } from 'redux-saga/effects'
import {} from './userSaga.ts'

export default function* rootSaga(){
    yield all([])
}