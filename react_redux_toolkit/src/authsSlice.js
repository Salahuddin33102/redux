import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null,

}

const loginslice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload
        }
    }
})
export const { login } = loginslice.actions
export default loginslice.reducer