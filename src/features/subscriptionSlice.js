import { createSlice } from '@reduxjs/toolkit';

export const subscription = createSlice({
  name: 'subscription',

  initialState: {
    loading: true,
    subscriptions: [],
  },

  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setSubscriptions: (state, action) => {
      state.subscriptions = [...action.payload];
    },
  },
});

export const { setLoading, setSubscriptions } = subscription.actions;

export const selectLoading = (state) => state.subscription.loading;
export const selectSubscriptions = (state) => state.subscription.subscriptions;

export default subscription.reducer;
