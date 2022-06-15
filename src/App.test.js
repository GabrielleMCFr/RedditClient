import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './app/App';
import subredditsReducer, { loadSubreddits } from './features/subreddits/subredditsSlice'
import redditPostsReducer, { loadRedditPosts, setSearchTerm, setSelectedSubreddit } from './features/redditPosts/redditPostsSlice'
import commentsReducer, { loadComments } from './features/Comments/CommentsSlice';

test('the app renders', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(getByText('Reddit')).toBeInTheDocument();
  expect(getByText('Subreddits')).toBeInTheDocument();
});

// TEST REDUCERS:
describe("Testing reducers", () => {
  describe("Subreddits reducer", () => {
    test("should return the initial state", () => {
      expect(subredditsReducer(undefined, {})).toEqual(
        {
          subreddits: [],
          hasError: false,
          isLoading: false
        }
      )
    })
  
    const initialState = {
      subreddits: [],
      hasError: false,
      isLoading: false
    }
  
    test('should handle pending when loading', () => {
      const action = { type: loadSubreddits.pending.type };
      const state = subredditsReducer(initialState, action);
      expect(state).toEqual({
        subreddits: [],
        hasError: false,
        isLoading: true
      })
    })
  
    test('should handle rejection when loading', () => {
      const action = { type: loadSubreddits.rejected.type };
      const state = subredditsReducer(initialState, action);
      expect(state).toEqual({
        subreddits: [],
        hasError: true,
        isLoading: false
      })
    })
  
    test('should handle loading successfully', () => {
      const action = { type: loadSubreddits.fulfilled.type, payload: [{id: 1, text:"post1"}, {id: 2, text:"post2"}, {id: 3, text:"post3"}] };
      const state = subredditsReducer(initialState, action);
      expect(state).toEqual({
        subreddits: [{id: 1, text:"post1"}, {id: 2, text:"post2"}, {id: 3, text:"post3"}],
        hasError: false,
        isLoading: false
      })
    })
  })
  
  
  describe("RedditPosts reducer", () => {
    test("should return the initial state", () => {
      expect(redditPostsReducer(undefined, {})).toEqual(
        {
          posts: [],
          hasError: false,
          isLoading: false,
          searchTerm: '',
          selectedSubreddit: "/r/Home/"
        }
      )
    })
  
    test("should accept a searchterm and register it", () => {
      const previousState = {}
      expect(redditPostsReducer(previousState, setSearchTerm('mytest'))).toEqual(
        {
          searchTerm: 'mytest'
        }
      )
    })
  
    test("should change subreddit", () => {
      const previousState = {}
      expect(redditPostsReducer(previousState, setSelectedSubreddit('/r/pics'))).toEqual(
        {
          selectedSubreddit: '/r/pics'
        }
      )
    })
  
    const initialState = {
      posts: [],
      hasError: false,
      isLoading: false,
      searchTerm: '',
      selectedSubreddit: "/r/Home/"
    }
  
    test("should handle rejection", () => {
      const action = { type: loadRedditPosts.rejected.type };
      const state = redditPostsReducer(initialState, action);
      expect(state).toEqual({
        posts: [],
        hasError: true,
        isLoading: false,
        searchTerm: '',
        selectedSubreddit: "/r/Home/"
      })
    })
  
    test("should handle pending", () => {
      const action = { type: loadRedditPosts.pending.type };
      const state = redditPostsReducer(initialState, action);
      expect(state).toEqual({
        posts: [],
        hasError: false,
        isLoading: true,
        searchTerm: '',
        selectedSubreddit: "/r/Home/"
      })
    })
  
    test("should handle loading posts successfully", () => {
      const action = { type: loadRedditPosts.fulfilled.type, payload: [{id:1, text:"post1"}, {id:2, text:"post2"}, {id:3, text:"post3"}] };
      const state = redditPostsReducer(initialState, action);
      expect(state).toEqual({
        posts: [{id:1, text:"post1"}, {id:2, text:"post2"}, {id:3, text:"post3"}],
        hasError: false,
        isLoading: false,
        searchTerm: '',
        selectedSubreddit: "/r/Home/"
      })
    })
  
  })
  
  describe("Comments reducer", () => {
    test("should return the initial state", () => {
      expect(commentsReducer(undefined, {})).toEqual(
        {
          comments: [],
          hasComsError: false,
          areComsLoading: false
        }
      )
    })
  
    const initialState = {
      comments: [],
      hasComsError: false,
      areComsLoading: false
    }
  
    test("should handle rejection", () => {
      const action = { type: loadComments.rejected.type };
      const state = commentsReducer(initialState, action);
      expect(state).toEqual({
        comments: [],
        hasComsError: true,
        areComsLoading: false
      })
    })
  
    test("should handle pending", () => {
      const action = { type: loadComments.pending.type };
      const state = commentsReducer(initialState, action);
      expect(state).toEqual({
        comments: [],
        hasComsError: false,
        areComsLoading: true
      })
    })
  
    test("should load comments successfully", () => {
      const action = { type: loadComments.fulfilled.type, payload:[{id:1, text:"comment1"}, {id:2, text:"comment2"}, {id:3, text:"comment3"}] };
      const state = commentsReducer(initialState, action);
      expect(state).toEqual({
        comments: [{id:1, text:"comment1"}, {id:2, text:"comment2"}, {id:3, text:"comment3"}],
        hasComsError: false,
        areComsLoading: false
      })
    })
  })
})




