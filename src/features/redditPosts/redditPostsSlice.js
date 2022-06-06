// reddit post slice redux
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_ROOT = 'https://www.reddit.com';

export const loadRedditPosts = createAsyncThunk(
    'redditsPosts/loadRedditPosts',
    async (subreddit) => {
        const data = await fetch(`${API_ROOT}${subreddit}.json`);
        const json = await data.json();
        return json.data.children?.map((post) => post.data);;
    }
)


export const redditPostsSlice = createSlice({
    name: "redditPosts",
    initialState: {
        posts: [],
        hasError: false,
        isLoading: false,
        searchTerm: '',
        selectedSubreddit: "/r/Home/"
    },
    reducers: {
      setSearchTerm: (state, action) => {
        state.searchTerm = action.payload
      },
      setSelectedSubreddit: (state, action) => {
        state.selectedSubreddit = action.payload
      },
      
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadRedditPosts.pending, (state) => {
                state.hasError = false;
                state.isLoading = true;
            })
            .addCase(loadRedditPosts.fulfilled, (state, action) => {
                state.hasError = false;
                state.isLoading = false;
                state.posts = action.payload
            })
            .addCase(loadRedditPosts.rejected, (state) => {
                state.hasError = true;
                state.isLoading = false;
                state.posts = [];
            })
    }
})

export const selectSubreddit = (state) => state.redditPosts.selectedSubreddit;
export const selectSearchTerm = (state) => state.redditPosts.searchTerm;
export const selectAllPosts = (state) => state.redditPosts.posts;
export const selectFilteredPosts = (state) => {
  const allPosts = selectAllPosts(state);
  if (!state.redditPosts.searchTerm) {
    return allPosts
  }
  else {
    const search = selectSearchTerm(state).toLowerCase();
    return allPosts.filter((post) => {
      return post.title.toLowerCase().includes(search)
    })
  }
}

export const isLoading = (state) => state.redditPosts.isLoading;
export const { setSearchTerm, setSelectedSubreddit } = redditPostsSlice.actions;
export default redditPostsSlice.reducer;