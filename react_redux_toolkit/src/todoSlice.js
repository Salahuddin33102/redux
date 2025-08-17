import { createSlice } from '@reduxjs/toolkit'
import todo from './components/todo';


const initialState = {
    store: [],
    inputvalue: "",
    editingindex: null,
}

const todoslice = createSlice({
    name: 'todo',
    initialState,
    reducers: {


        setinputvalue: (state, action) => {
            console.log('action: ', action);
            state.inputvalue = action.payload   
        },


        addTodo: (state) => {
            const trimmed = state.inputvalue.trim();
            if (trimmed && !state.store.includes(trimmed)) {    
                state.store.push(trimmed);
                state.inputvalue = '';
            } else {
                alert("this field is empty....");
            }
        },


        deletetodo: (state, action) => {
            const index = action.payload;
            state.store.splice(index, 1)
            if (state.editingindex === index) {
                state.inputvalue = '';
                state.editingindex = null;
            }

        },

        edittodo: (state, action) => {
            const index = action.payload;
            state.inputvalue = state.store[index]
            state.editingindex = index;
            state.store.splice(index, 1)
        }
    }
})
export const { setinputvalue, addTodo, deletetodo, edittodo } = todoslice.actions
export default todoslice.reducer
