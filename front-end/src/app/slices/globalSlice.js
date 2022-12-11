import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loggedInUser:null,
}

export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setLoggedInUser :(state,action)=>{
            state.loggedInUser = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { setLoggedInUser } = globalSlice.actions

export default globalSlice.reducer