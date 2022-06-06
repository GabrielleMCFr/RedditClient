// subreddit slice redux
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_ROOT = 'https://www.reddit.com';

export const loadSubreddits = createAsyncThunk(
    'subreddits/loadSubreddits',
    async () => {
        const response = await fetch(`${API_ROOT}/subreddits.json`);
        const json = await response.json();
        return json.data.children?.map((subreddit) => subreddit.data);
    }
)


export const subredditsSlice = createSlice({
    name: "subreddits",
    initialState: {
        subreddits: [],
        hasError: false,
        isLoading: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadSubreddits.pending, (state) => {
                state.hasError = false;
                state.isLoading = true;
            })
            .addCase(loadSubreddits.fulfilled, (state, action) => {
                state.hasError = false;
                state.isLoading = false;
                state.subreddits = action.payload
            })
            .addCase(loadSubreddits.rejected, (state) => {
                state.hasError = true;
                state.isLoading = false;
                state.subreddits = [];
            })
    }
});

export const selectSubreddits = (state) => state.subreddits.subreddits;
export const isLoading = (state) => state.subreddits.isLoading;
export default subredditsSlice.reducer;
