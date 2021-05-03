import { useEffect } from 'react';
import SidebarRow from './SidebarRow';
import axios from '../utils/axios';
import '../css/Sidebar.css';
import { useDispatch, useSelector } from 'react-redux';

import {
  History,
  Home,
  PlaylistPlay,
  Subscriptions,
  VideoLibrary,
  Whatshot,
} from '@material-ui/icons';
import { selectPlaylists, setPlaylistError, setPlaylists } from '../features/playlistSlice';
import {
  selectLoading,
  selectSubscriptions,
  setLoading,
  setSubscriptionError,
  setSubscriptions,
} from '../features/subscriptionSlice';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const dispatch = useDispatch();

  // useEffect for fetching the playlists of user
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios('/playlists', {
          params: {
            part: 'snippet',
            mine: true,
            maxResults: 25,
          },
          headers: {
            Authorization: `Bearer ${localStorage?.accessToken}`,
          },
        });
        dispatch(setPlaylists(data?.items));
        dispatch(setLoading(false));
      } catch (error) {
        dispatch(setPlaylistError(error));
      }
    };
    fetchData();
  }, []);

  // useEffect for fetching the subscriptions
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios('/subscriptions', {
          params: {
            part: 'snippet,contentDetails',
            mine: true,
            maxResults: 20,
          },
          headers: {
            Authorization: `Bearer ${localStorage?.accessToken}`,
          },
        });
        dispatch(setSubscriptions(data?.items));
        dispatch(setLoading(false));
      } catch (error) {
        dispatch(setSubscriptionError(error));
      }
    };
    fetchData();
  }, []);

  const playlists = useSelector(selectPlaylists)?.map((playlist) => (
    <SidebarRow
      playlist
      key={playlist?.id}
      Icon={<PlaylistPlay />}
      title={playlist?.snippet?.title}
    />
  ));

  const subscriptions = useSelector(selectSubscriptions)?.map((item) => (
    <SidebarRow
      subscription
      key={item?.id}
      channelId={item?.snippet?.resourceId?.channelId}
      src={item?.snippet?.thumbnails?.medium?.url}
      title={item?.snippet?.title}
    />
  ));

  return (
    <aside className="sidebar">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <SidebarRow selected title="Home" Icon={<Home />} />
      </Link>
      <SidebarRow title="Trending" Icon={<Whatshot />} />
      <hr />
      <SidebarRow title="Library" Icon={<VideoLibrary />} />
      <SidebarRow title="History" Icon={<History />} />
      <hr />
      <h4>Subscriptions</h4>
      {subscriptions}
      <hr />
      <h4>Playlists</h4>
      {playlists}
    </aside>
  );
};

export default Sidebar;
