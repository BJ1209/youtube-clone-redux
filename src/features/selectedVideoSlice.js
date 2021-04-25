import { createSlice } from '@reduxjs/toolkit';

export const selectedVideo = createSlice({
  name: 'selectedVideo',

  initialState: {
    loading: true,
    video: {},
    relatedVideos: [],
  },

  reducers: {
    setVideo: (state, action) => {
      state.video = { ...action.payload };
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setRelatedVideos: (state, action) => {
      state.relatedVideos = [...action.payload];
    },
  },
});

export const { setLoading, setVideo, setRelatedVideos } = selectedVideo.actions;

export const selectVideo = (state) => state.selectedVideo.video;
export const selectLoading = (state) => state.selectedVideo.loading;
export const selectRelatedVideos = (state) => state.selectedVideo.relatedVideos;

export default selectedVideo.reducer;
