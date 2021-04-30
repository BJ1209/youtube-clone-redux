import { createSlice } from '@reduxjs/toolkit';

export const comments = createSlice({
  name: 'comments',

  initialState: {
    comments: [],
    nextPageToken: '',
    error: {},
  },

  reducers: {
    setComments: (state, action) => {
      state.comments = [...action.payload];
    },

    setNextPageToken: (state, action) => {
      state.nextPageToken = action.payload;
    },
    setCommentsError: (state, action) => {
      state.error = { ...action.payload };
    },
  },
});

export const { setComments, setNextPageToken, setCommentsError } = comments.actions;

export const selectComments = (state) => state.comments.comments;
export const selectNextPageToken = (state) => state.comments.nextPageToken;

export default comments.reducer;
