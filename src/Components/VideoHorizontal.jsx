import { CheckCircle } from '@material-ui/icons';
import '../css/VideoHorizontal.css';
const VideoHorizontal = () => {
  return (
    <div className="videoHorizontal">
      <div className="videoHorizontal__video">
        <img src="https://material-ui.com/static/ads-in-house/divjoy.png" alt="" />
        <span className="videoHorizontal__duration">28:20</span>
      </div>
      <div className="videoHorizontal__details">
        <h3 className="videoHorizontal__title">Build parallax website with HTML</h3>
        <div className="videoHorizontal__channel">
          <p className="videoHorizontal__channelName">Dev Ed</p>
          <span>
            <CheckCircle />
          </span>
        </div>
        <div className="videoHorizontal__stats">
          <div className="videoHorizontal__views">
            <span>25k</span> Views
          </div>
          <span>•</span>
          <span className="videoHorizontal__timestamp">2 days ago</span>
        </div>
      </div>
    </div>
  );
};

export default VideoHorizontal;
