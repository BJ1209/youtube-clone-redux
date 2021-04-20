import { createSlice } from '@reduxjs/toolkit';

export const channel = createSlice({
  name: 'channel',

  initialState: {
    loading: false,
    channel: {},
  },

  reducers: {
    setChannel: (state, action) => {
      state.channel = { ...action.payload };
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setLoading, setChannel } = channel.actions;

export const selectChannel = (state) => state.channel.channel;
export const selectLoading = (state) => state.channel.loading;

export default channel.reducer;
