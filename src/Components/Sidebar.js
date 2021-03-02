import SidebarRow from './SidebarRow';
import '../css/Sidebar.css';
import { History, Home, Subscriptions, VideoLibrary, Whatshot } from '@material-ui/icons';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <SidebarRow selected title="Home" Icon={<Home />} />
      <SidebarRow title="Trending" Icon={<Whatshot />} />
      <SidebarRow title="Subscrptions" Icon={<Subscriptions />} />
      <hr />
      <SidebarRow title="Library" Icon={<VideoLibrary />} />
      <SidebarRow title="History" Icon={<History />} />
      {/* <SidebarRow title="Your Videos" Icon={OndemandVideo} />
      <SidebarRow title="Liked Videos" Icon={ThumbUpAltSharp} />
      <SidebarRow title="Your Videos" Icon={OndemandVideo} />
      <SidebarRow title="Show More" Icon={ExpandMoreOutlined} /> */}
      <hr />
    </aside>
  );
};

export default Sidebar;
