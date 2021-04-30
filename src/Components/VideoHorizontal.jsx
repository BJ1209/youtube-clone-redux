import { CheckCircle } from '@material-ui/icons';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useHistory } from 'react-router';
import '../css/VideoHorizontal.css';
import { getPublishedDate, getSubstring } from '../utils/basicFunctions';

const VideoHorizontal = ({ videoId, video }) => {
  const history = useHistory();
  return (
    <div className="videoHorizontal" onClick={() => history.push(`/watch/${videoId}`)}>
      <div className="videoHorizontal__video">
        <LazyLoadImage src={video?.thumbnails?.medium?.url} alt={video?.title} />
        <span className="videoHorizontal__duration">28:20</span>
      </div>
      <div className="videoHorizontal__details">
        <h3 className="videoHorizontal__title">{getSubstring(video?.title)}</h3>
        <div className="videoHorizontal__channel">
          <p className="videoHorizontal__channelName">{video?.channelTitle}</p>
          <span>
            <CheckCircle />
          </span>
        </div>
        <div className="videoHorizontal__stats">
          <div className="videoHorizontal__views">
            <span>25k</span> Views
          </div>
          <span>•</span>
          <span className="videoHorizontal__timestamp">{getPublishedDate(video?.publishedAt)}</span>
        </div>
      </div>
    </div>
  );
};

export default VideoHorizontal;
