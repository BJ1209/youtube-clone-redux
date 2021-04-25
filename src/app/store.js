import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import videoReducer from '../features/videoSlice';
import selectedVideoReducer from '../features/selectedVideoSlice';
import channelReducer from '../features/channelSlice';
import commentsReducer from '../features/commentsSlice';
import playlistsReducer from '../features/playlistSlice';
import SubscriptionsReducer from '../features/subscriptionSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    playlists: playlistsReducer,
    subscription: SubscriptionsReducer,
    video: videoReducer,
    selectedVideo: selectedVideoReducer,
    channel: channelReducer,
    comments: commentsReducer,
  },
});
