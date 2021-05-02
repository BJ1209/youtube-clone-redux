import { CheckCircle } from '@material-ui/icons';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useHistory } from 'react-router';
import { getDuration, getPublishedDate, getSubstring } from '../utils/basicFunctions';
import axios from '../utils/axios';
import '../css/VideoHorizontal.css';
import { getChannelDetails, getVideoDetails } from '../utils/requests';
import { useEffect, useState } from 'react';
import Avatar from './Avatar';

const VideoHorizontal = ({ videoId, video, searchScreen }) => {
  const [duration, setDuration] = useState(0);
  const [channelThumbnail, setChannelThumbnail] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(getVideoDetails(videoId));
        setDuration(data?.items[0]?.contentDetails?.duration);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(getChannelDetails(video?.channelId));
        setChannelThumbnail(data?.items[0]?.snippet?.thumbnails?.medium?.url);
      } catch (error) {
        return null;
      }
    };
    fetchData();
  }, []);

  const history = useHistory();

  return (
    <div className="videoHorizontal" onClick={() => history.push(`/watch/${videoId}`)}>
      <div className={`videoHorizontal__video ${searchScreen ? 'search' : ''}`}>
        <LazyLoadImage src={video?.thumbnails?.medium?.url} alt={video?.title} />
        <span className="videoHorizontal__duration">{getDuration(duration)}</span>
      </div>
      <div className="videoHorizontal__details">
        <h3 className={`videoHorizontal__title ${searchScreen ? 'search--title' : ''}`}>
          {!searchScreen ? getSubstring(video?.title, 50) : video?.title}
        </h3>
        <div className={`videoHorizontal__channel ${searchScreen ? 'search--channel' : ' '}`}>
          {searchScreen && <Avatar src={channelThumbnail} style={{ width: 30, height: 30 }} />}{' '}
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
        {searchScreen && (
          <div className="videoHorizontal__description">{getSubstring(video?.description, 75)}</div>
        )}
      </div>
    </div>
  );
};

export default VideoHorizontal;
