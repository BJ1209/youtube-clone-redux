import '../css/SidebarRow.css';
import Avatar from './Avatar';

const SidebarRow = ({ selected, title, Icon, src }) => {
  return (
    <div className={`sidebarRow ${selected ? 'selected' : ''} ${src ? 'playlist' : ''}`}>
      {Icon && Icon}
      {src && <Avatar style={{ height: 32, width: 32, marginRight: 15 }} src={src} />}
      <h4 className={`sidebarRow__title`}>{title}</h4>
    </div>
  );
};

export default SidebarRow;
