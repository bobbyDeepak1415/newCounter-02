import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const initialState={

}


const CounterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state)=>{
state.value+=1
        },
        
    }
}) 

export default CounterSlice.reducer
