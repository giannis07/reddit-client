import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './features/postsSlice';
import searchReducer from './features/searchSlice';
import subredditReducer from './features/subredditSlice';

const store = configureStore({
  reducer: {
    posts: postsReducer,
    search: searchReducer,
    subreddit: subredditReducer,
  },
});

export default store;
