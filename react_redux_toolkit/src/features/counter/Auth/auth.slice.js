import { createSlice } from '@reduxjs/toolkit'


const authSlice = createSlice({

    name: "auth",
    initialState: {
        user: null,
        error: null,
    },

    reducers: {
        login: (state, action) => {
            const { email, password } = action.payload;
            if (email === 'test@example.com' && password === '123456') {
                state.user = { email };
                state.error = null;
            } else {
                state.user = null;
                state.error = 'Invalid email or password';
            }
        },
        logout: (state) => {
            state.user = null;
            state.error = null;
        }
    }



})
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;