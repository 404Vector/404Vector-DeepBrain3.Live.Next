import {createAction, handleActions} from 'redux-actions';
import {call, put, takeLatest} from 'redux-saga/effects';

import axios from 'axios'
import {SERVER, headers} from "@/modules/auth/server"

// State Ininitial value
export const initialState = {
    isRegistered: false
}

// Action Type
const REGISTER_REQUEST = 'auth/REGISTER_REQUEST'; // use react
const REGISTER_SUCCESS = 'auth/REGISTER_SUCCESS'; // use redux
const REGISTER_FAILURE = 'auth/REGISTER_FAILURE'; // use redux

// Action generate function(DO NOT EXPORT internal function)
export const registerRequest = createAction(REGISTER_REQUEST, data => data)

// Saga Watcher(Watcher always watch Only views)
export function* registerSaga() {
    yield takeLatest(REGISTER_REQUEST, signup)
}

// Saga Logic
function* signup(action) {
    try {
        console.log(" **** 여기가 핵심 *** " + JSON.stringify(action))
        const response = yield call(registerAPI, action.payload)
        console.log(" 회원가입 서버다녀옴: " + JSON.stringify(response.data))
        const result = response.data.result
        const ok = response.data.ok
        if (ok === 'ok') {
            yield put({type: REGISTER_SUCCESS, payload: response.data})
            yield put((window.location.href = "/auth/login"));
        } else {
            yield put({type: REGISTER_FAILURE, payload: error.message})
        }
    } catch (error) {
        yield put({type: REGISTER_FAILURE, payload: error.message})
    }
}

// API
const registerAPI = payload => axios.post(
    `${SERVER}/user/join`,
    payload,
    {headers}
)

// Reducer
/* Original Code example for reference
const register = (state = initialiState, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
            return {...state, isRegistered: true}
            case REGISTER_FAILURE:
                return {...state, isRegistered: false}
                default:
                    return state
                }
            }
*/
// 위 코드의 약식 표현, []: () => () <- 중괄호{}면 Return을 정해줘야함 ()는 리턴 생략, () 는 {return()}과 같음. 주의, {}만 쓰면 작동 안되는데 에러도 안나온다
const register = handleActions({
    [REGISTER_SUCCESS]: (state, _action) => ({...state, isRegistered: true}),
    [REGISTER_FAILURE]: (state, _action) => ({...state, isRegistered: false}),
}, initialState)
export default register