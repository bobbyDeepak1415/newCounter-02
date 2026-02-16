import { createSlice } from "@reduxjs/toolkit"

const initialState={
    value:0
}


const counterSlice2=createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state)=>{
state.value+=1
        },
        decrement:(current)=>{
if(current.value<0) return
current.value-=1
        }
    }
})