/*
import { combineReducers } from 'redux'
import adminReducer from './adminReducer.ts'
import basicReducer from './basicReducer.ts'
import boardReducer from './boardReducer.ts'
import gameReducer from './gameReducer.ts'
import todoReducer from './todoReducer.ts'
import userReducer from './userReducer.ts'

const rootReducer = combineReducers({
    adminReducer,
    basicReducer,
    boardReducer,
    gameReducer,
    todoReducer,
    userReducer
})
export default rootReducer
export type RootState = ReturnType<typeof rootReducer>

 */
//server side rendering을 위해 필요
import { combineReducers } from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper"
import { type } from "os"
import { TypeOf } from "yup"
import users from "./userReducer.ts"

const rootReducer = (state:any, action:any) =>{
    if(action.type === HYDRATE){
        return{
            ...state,
            ...action.payload,
        }
    }
    return combineReducers({
        users
    })(state, action)
}
export default rootReducer
export type RootState = ReturnType<tpyeof rootReducer>