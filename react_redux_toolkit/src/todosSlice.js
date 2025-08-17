import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const todofetch = createAsyncThunk("todofetch", async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos");
    return data.json()
})




const todoslice = createSlice({
    name: "todos",
    initialState: {
        isLoading: false,
        data: null,
        isError: null,
    },

    extraReducers: (build) => {

        build.addCase(todofetch.pending, (state, action) => {
            state.isLoading = true
        })
        build.addCase(todofetch.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        build.addCase(todofetch.rejected, (state, action) => {
            console.log("error", action.payload);
            state.isError = true

        })
    }
})
export default todoslice.reducer