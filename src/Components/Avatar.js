import { LazyLoadImage } from 'react-lazy-load-image-component';

const styles = {
  height: '45px',
  width: '45px',
  borderRadius: '50%',
};

const Avatar = (props) => {
  return <LazyLoadImage {...props} style={{ ...styles, ...props.style }} />;
};

export default Avatar;
