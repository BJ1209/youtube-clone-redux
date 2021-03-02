import '../css/SidebarRow.css';

const SidebarRow = ({ selected, title, Icon }) => {
  return (
    <div className={`sidebarRow ${selected ? 'selected' : ''}`}>
      {Icon && Icon}
      <h4 className="sidebarRow__title">{title}</h4>
    </div>
  );
};

export default SidebarRow;
