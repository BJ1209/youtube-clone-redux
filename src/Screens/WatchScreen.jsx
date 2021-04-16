import Comments from '../Components/Comments';
import VideoHorizontal from '../Components/VideoHorizontal';
import VideoMetaData from '../Components/VideoMetaData';
import '../css/WatchScreen.css';
const WatchScreen = () => {
  return (
    <div className="watchscreen">
      <div className="watchscreen__left">
        <div className="watchscreen__player">
          <iframe
            src="https://www.youtube.com/embed/1Gfa471nVPU"
            title="video"
            allowFullScreen
            width="100%"
            height="100%"
          ></iframe>
        </div>
        <VideoMetaData />
        <Comments />
      </div>
      <div className="watchscreen__right">
        {[...Array(10)].map((_, index) => (
          <VideoHorizontal key={index} />
        ))}
      </div>
    </div>
  );
};

export default WatchScreen;
