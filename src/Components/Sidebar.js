import { useEffect } from 'react';
import SidebarRow from './SidebarRow';
import axios from '../utils/axios';
import '../css/Sidebar.css';
import { useDispatch, useSelector } from 'react-redux';

import { History, Home, Subscriptions, VideoLibrary, Whatshot } from '@material-ui/icons';
import { selectPlaylists, setLoading, setPlaylists } from '../features/playlistSlice';

const Sidebar = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios('/playlists', {
          params: {
            part: 'snippet',
            mine: true,
            maxResults: 30,
          },
          headers: {
            Authorization: `Bearer ${localStorage?.accessToken}`,
          },
        });
        dispatch(setPlaylists(data?.items));
        dispatch(setLoading(false));
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  const playlists = useSelector(selectPlaylists)?.map((playlist) => (
    <SidebarRow
      key={playlist?.id}
      src={playlist?.snippet?.thumbnails?.medium?.url}
      title={playlist?.snippet?.title}
    />
  ));

  return (
    <aside className="sidebar">
      <SidebarRow selected title="Home" Icon={<Home />} />
      <SidebarRow title="Trending" Icon={<Whatshot />} />
      <SidebarRow title="Subscriptions" Icon={<Subscriptions />} />
      <hr />
      <SidebarRow title="Library" Icon={<VideoLibrary />} />
      <SidebarRow title="History" Icon={<History />} />
      <hr />
      <h4>Subscriptions</h4>
      {playlists}
    </aside>
  );
};

export default Sidebar;
