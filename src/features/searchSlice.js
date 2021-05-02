import { createSlice } from '@reduxjs/toolkit';

export const search = createSlice({
  name: 'search',

  initialState: {
    loading: true,
    searchResults: [],
    searchResultsError: {},
  },

  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setSearchResults: (state, action) => {
      state.searchResults = [...action.payload];
    },
    setSearchResultsError: (state, action) => {
      state.searchResultsError = { ...action.payload };
    },
  },
});

export const { setLoading, setSearchResults, setSearchResultsError } = search.actions;

export const selectLoading = (state) => state.search.loading;
export const selectSearchResults = (state) => state.search.searchResults;

export default search.reducer;
