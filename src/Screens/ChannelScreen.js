import { useEffect } from 'react';
import { useParams } from 'react-router';
import axios from '../utils/axios';
import '../css/ChannelScreen.css';
import { getChannelDetails, getChannelsUploadId, getPlaylistItemsById } from '../utils/requests';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectChannel,
  selectChannelVideos,
  setChannel,
  setChannelError,
  setChannelVideos,
  setChannelVideosError,
} from '../features/channelSlice';
import Channel from '../Components/Channel';
import Video from '../Components/Video';

const ChannelScreen = () => {
  const { channelId } = useParams();
  const dispatch = useDispatch();

  // useEffect for the channelDetails for the channel component
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(getChannelDetails(channelId));
        dispatch(setChannel(data?.items[0]));
      } catch (error) {
        dispatch(setChannelError(error));
      }
    };
    fetchData();
  }, [channelId]);

  // useEffect for the uploads playlist of the channel
  // first we are getting the uploadsId from the channel Details
  // then getting the playlistItems/videos from the uploads playlist
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(getChannelsUploadId(channelId));
        const uploadsId = data?.items[0]?.contentDetails?.relatedPlaylists?.uploads;
        const res = await axios.get(getPlaylistItemsById(uploadsId));
        dispatch(setChannelVideos(res?.data?.items));
      } catch (error) {
        dispatch(setChannelVideosError(error));
      }
    };
    fetchData();
  }, [channelId]);

  const channel = useSelector(selectChannel);
  const channelVideos = useSelector(selectChannelVideos);
  return (
    <div className="channelScreen">
      <img className="channelScreen__banner" />
      <Channel channelScreen channelId={channelId} channel={channel?.snippet} />
      <div className="channelScreen__videos">
        {channelVideos.map((video) => (
          <Video key={video?.id} video={video} channelScreen />
        ))}
      </div>
    </div>
  );
};

export default ChannelScreen;
