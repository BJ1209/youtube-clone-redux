import { createSlice } from '@reduxjs/toolkit';

export const channel = createSlice({
  name: 'channel',

  initialState: {
    loading: false,
    channel: {},
    channelError: {},
    subscriptionStatus: false,
    subscriptionStatusError: {},
    channelVideos: [],
    channelVideosError: {},
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
    setChannelError: (state, action) => {
      state.channelError = { ...action.payload };
    },
    setSubscriptionStatusError: (state, action) => {
      state.subscriptionStatusError = { ...action.payload };
    },
    setChannelVideos: (state, action) => {
      state.channelVideos = [...action.payload];
    },
    setChannelVideosError: (state, action) => {
      state.channelVideosError = { ...action.payload };
    },
  },
});

export const {
  setLoading,
  setChannel,
  setSubscriptionStatus,
  setChannelError,
  setSubscriptionStatusError,
  setChannelVideos,
  setChannelVideosError,
} = channel.actions;

export const selectChannel = (state) => state.channel.channel;
export const selectLoading = (state) => state.channel.loading;
export const selectSubscriptionStatus = (state) => state.channel.subscriptionStatus;
export const selectChannelVideos = (state) => state.channel.channelVideos;

export default channel.reducer;
