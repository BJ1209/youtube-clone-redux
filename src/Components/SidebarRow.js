import '../css/SidebarRow.css';
import Avatar from './Avatar';

const SidebarRow = ({ selected, title, Icon, src }) => {
  return (
    <div className={`sidebarRow ${selected ? 'selected' : ''} ${src ? 'subscription' : ''}`}>
      {Icon && Icon}
      {src && <Avatar style={{ height: 25, width: 25, marginRight: 20 }} src={src} />}
      <h4 className={`sidebarRow__title`}>{title}</h4>
    </div>
  );
};

export default SidebarRow;
