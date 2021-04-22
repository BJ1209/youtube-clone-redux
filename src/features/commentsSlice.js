import { createSlice } from '@reduxjs/toolkit';

export const comments = createSlice({
  name: 'comments',

  initialState: {
    comments: [],
    nextPageToken: '',
  },

  reducers: {
    setComments: (state, action) => {
      state.comments = [...action.payload];
    },

    setNextPageToken: (state, action) => {
      state.nextPageToken = action.payload;
    },
  },
});

export const { setComments, setNextPageToken } = comments.actions;

export const selectComments = (state) => state.comments.comments;
export const selectNextPageToken = (state) => state.comments.nextPageToken;

export default comments.reducer;
