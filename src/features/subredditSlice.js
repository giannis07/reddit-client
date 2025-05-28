import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  subreddit: 'popular', // Αρχικό subreddit
};

const subredditSlice = createSlice({
  name: 'subreddit',
  initialState,
  reducers: {
    setSubreddit(state, action) {
      // Ενημερώνει το τρέχον subreddit
      state.subreddit = action.payload;
      console.log(state.subreddit);
    },
  },
});

// Εξαγωγή actions
export const { setSubreddit } = subredditSlice.actions;

// Εξαγωγή του reducer για το store
export default subredditSlice.reducer;
