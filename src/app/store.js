import { configureStore } from '@reduxjs/toolkit';
import subredditsReducer from '../features/subreddits/subredditsSlice';
import redditPostsReducer from '../features/redditPosts/redditPostsSlice';
import commentsReducer from '../features/Comments/CommentsSlice';

export const store = configureStore({
  reducer: {
    subreddits: subredditsReducer,
    redditPosts: redditPostsReducer,
    comments: commentsReducer
  },
});
