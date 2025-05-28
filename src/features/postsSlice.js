import { fetchPosts } from '../services/redditAPI';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getPosts = createAsyncThunk('posts/getPosts', async ({ subreddit, searchQuery }) => {
    const posts = await fetchPosts(subreddit, searchQuery);
    return posts;
});

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
      posts: [],
      status: 'idle',
      error: null,
    },
    extraReducers: (builder) => {
      builder
        .addCase(getPosts.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(getPosts.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.posts = action.payload;
        })
        .addCase(getPosts.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
    },
  });
  
  export default postsSlice.reducer;