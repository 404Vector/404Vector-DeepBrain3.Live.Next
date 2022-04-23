import { createSlice } from "@reduxjs/toolkit"

export interface UserType{
    userid: string;
    password: string;  
    email: string;
    name: string;  
    phone: string;
    birth: string;
    address: string;
}

export interface UserState{
    loading: boolean;
    data: UserType[];
    error: any;
}


const initialState: UserState = {
    loading: false,
    data: [],
    error: null
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        //원래는 key 값임 joinRequest () =>{} 가 원래 form
        joinRequest(state: UserState, payload) {
            alert('진행 2: 리듀서 내부 ') 
            state.loading = true; 
        },
        joinSuccess(state: UserState, {payload}){ 
            state.data = [...state.data, payload]
            state.loading = false;
            
        },
        joinFailure(state: UserState, {payload}){ 
            state.data = payload;
            state.loading = false;
        }
    }
})
//reducers 내용이 actions로 들어간다, action은 saga로 넘어간다
const { reducer, actions } = userSlice
export const userActions = actions
export default reducer // root reducer로 버블링됨