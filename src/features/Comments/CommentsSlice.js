import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_ROOT = 'https://www.reddit.com';

export const loadComments = createAsyncThunk(
    'comments/loadComments',
    async (array) => {
        const data = await fetch(`${API_ROOT}${array[0]}.json`);
        const json = await data.json();
        const jsonObj = json[1].data.children?.map((comment) => comment.data);
        return { [array[1]]: jsonObj}
    }
)

export const CommentsSlice = createSlice({
    name:"comments",
    initialState: {
        comments: [],
        hasComsError: false,
        areComsLoading: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(loadComments.pending, (state) => {
            state.hasComsError = false;
            state.areComsLoading = true;
        })
        .addCase(loadComments.fulfilled, (state, action) => {
            state.hasComsError = false;
            state.areComsLoading = false;
            state.comments = action.payload
             
        })
        .addCase(loadComments.rejected, (state) => {
            state.hasComsError = true;
            state.areComsLoading = false;
        })
    }
})

export const selectAllComs = (state) => state.comments.comments;
export const areComsLoading = (state) => state.comments.areComsLoading;
export default CommentsSlice.reducer
