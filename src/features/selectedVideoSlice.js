import { createSlice } from '@reduxjs/toolkit';

export const selectedVideo = createSlice({
  name: 'selectedVideo',

  initialState: {
    loading: true,
    video: {},
    relatedVideos: [],
    relatedVideoNextPageToken: '',
    videoError: {},
    relatedVideosError: {},
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
    setVideoError: (state, action) => {
      state.videoError = { ...action.payload };
    },
    setRelatedVideosError: (state, action) => {
      state.relatedVideosError = { ...action.payload };
    },
    setRelatedVideoNextPageToken: (state, action) => {
      state.relatedVideoNextPageToken = action.payload;
    },
  },
});

export const {
  setLoading,
  setVideo,
  setRelatedVideos,
  setVideoError,
  setRelatedVideosError,
  setRelatedVideoNextPageToken,
} = selectedVideo.actions;

export const selectVideo = (state) => state.selectedVideo.video;
export const selectLoading = (state) => state.selectedVideo.loading;
export const selectRelatedVideos = (state) => state.selectedVideo.relatedVideos;

export default selectedVideo.reducer;
