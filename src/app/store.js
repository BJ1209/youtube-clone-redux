import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import videoReducer from '../features/videoSlice';
import selectedVideoReducer from '../features/selectedVideoSlice';
import channelReducer from '../features/channelSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    video: videoReducer,
    selectedVideo: selectedVideoReducer,
    channel: channelReducer,
  },
});
