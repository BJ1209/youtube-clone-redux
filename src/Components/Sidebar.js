import SidebarRow from './SidebarRow';
import '../css/Sidebar.css';

import { History, Home, Subscriptions, VideoLibrary, Whatshot } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

const Sidebar = () => {
  const user = useSelector(selectUser);

  return (
    <aside className="sidebar">
      <SidebarRow selected title="Home" Icon={<Home />} />
      <SidebarRow title="Trending" Icon={<Whatshot />} />
      <SidebarRow title="Subscriptions" Icon={<Subscriptions />} />
      <hr />
      <SidebarRow title="Library" Icon={<VideoLibrary />} />
      <SidebarRow title="History" Icon={<History />} />
      {/* <SidebarRow title="Your Videos" Icon={OndemandVideo} />
      <SidebarRow title="Liked Videos" Icon={ThumbUpAltSharp} />
      <SidebarRow title="Your Videos" Icon={OndemandVideo} />
      <SidebarRow title="Show More" Icon={ExpandMoreOutlined} /> */}
      <hr />
      {!user ? (
        <>
          <p>Sign in to like videos, comment, and subscribe.</p>
          <hr />
        </>
      ) : null}
    </aside>
  );
};

export default Sidebar;
