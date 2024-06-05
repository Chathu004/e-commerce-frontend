import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    userId:0,
    name:"",
    status:"LOG_OUT"
}


const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.userId = action.payload.userId
            state.name=action.payload.name
            state.status="LOG_IN"
        }
    }
})

export const {login} =authSlice.actions
export default authSlice.reducer