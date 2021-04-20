import { createSlice } from '@reduxjs/toolkit';

export const selectedVideo = createSlice({
  name: 'selectedVideo',

  initialState: {
    loading: true,
    video: {},
  },

  reducers: {
    setVideo: (state, action) => {
      state.video = { ...action.payload };
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setLoading, setVideo } = selectedVideo.actions;

export const selectVideo = (state) => state.selectedVideo.video;
export const selectLoading = (state) => state.selectedVideo.loading;

export default selectedVideo.reducer;
