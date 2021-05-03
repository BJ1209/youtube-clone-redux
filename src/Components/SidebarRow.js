import { useHistory } from 'react-router';
import '../css/SidebarRow.css';
import Avatar from './Avatar';

const SidebarRow = ({ selected, title, Icon, src, channelId, subscription }) => {
  const history = useHistory();
  const clickHandler = () => {
    if (subscription) history.push(`/channel/${channelId}`);
  };
  return (
    <div
      onClick={clickHandler}
      className={`sidebarRow ${selected ? 'selected' : ''} ${src ? 'subscription' : ''}`}
    >
      {Icon && Icon}
      {src && <Avatar style={{ height: 25, width: 25, marginRight: 20 }} src={src} />}
      <h4 className={`sidebarRow__title`}>{title}</h4>
    </div>
  );
};

export default SidebarRow;
