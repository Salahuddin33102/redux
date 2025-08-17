import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from '../features/counter/counterslice.js'
import authReducer from '../features/counter/Auth/auth.slice.js'
import todoReducer from '../todoSlice.js'
// import toggleReducer from '../toggleslice.js'
import loginReducer from '../authsSlice.js'
import todosReducer from '../todosSlice.js'



export const store = configureStore({
    reducer: {
        // counter: counterReducer,
        auth: authReducer,
        todo: todoReducer,
        // toggle: toggleReducer,
        login: loginReducer,
        todos: todosReducer,


    },
})