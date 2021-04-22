import { createSlice } from '@reduxjs/toolkit';

export const channel = createSlice({
  name: 'channel',

  initialState: {
    loading: false,
    channel: {},
    subscriptionStatus: false,
  },

  reducers: {
    setChannel: (state, action) => {
      state.channel = { ...action.payload };
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setSubscriptionStatus: (state, action) => {
      state.subscriptionStatus = action.payload;
    },
  },
});

export const { setLoading, setChannel, setSubscriptionStatus } = channel.actions;

export const selectChannel = (state) => state.channel.channel;
export const selectLoading = (state) => state.channel.loading;
export const selectSubscriptionStatus = (state) => state.channel.subscriptionStatus;

export default channel.reducer;
