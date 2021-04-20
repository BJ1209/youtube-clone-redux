import { useEffect, useState } from 'react';
import axios from '../utils/axios';
import { QueueMusic, Schedule } from '@material-ui/icons';
import { getCount, getDuration, getPublishedDate } from '../utils/basicFunctions';
import { getChannelDetails, getVideoDetails } from '../utils/requests';
import '../css/Video.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useHistory } from 'react-router';
import Avatar from './Avatar';

const Video = ({ video }) => {
  const {
    id,
    snippet: {
      title,
      channelId,
      channelTitle,
      thumbnails: { medium },
      publishedAt,
    },
  } = video;

  const [channelThumbnail, setChannelThumbnail] = useState('');
  const [duration, setDuration] = useState('');
  const [viewCount, setViewCount] = useState('');
  const _videoId = id?.videoId || id;
  const history = useHistory();
  // UseEffect For getting the Channel Thumbnail for each video
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await axios.get(getChannelDetails(channelId));
        setChannelThumbnail(res?.data?.items[0]?.snippet?.thumbnails?.medium?.url);
      } catch (error) {
        alert(error.message);
      }
    };
    fetchDetails();
  }, [channelId]);

  // UseEffect for Video duration and the view count
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await axios.get(getVideoDetails(_videoId));
        setDuration(res?.data?.items[0]?.contentDetails?.duration);
        setViewCount(res?.data?.items[0]?.statistics?.viewCount);
      } catch (error) {
        alert(error.message);
      }
    };
    fetchDetails();
  }, []);

  return (
    <div className="video" onClick={() => history.push(`watch/${_videoId}`)}>
      <div className="video__container">
        <LazyLoadImage src={medium?.url} alt={title} className="video__image" />
        <div className="video__time">{getDuration(duration)}</div>
        <button className="video__btn schedule">
          <Schedule />
        </button>
        <button className="video__btn queue ">
          <QueueMusic />
        </button>
      </div>
      <div className="video__info">
        <Avatar style={{ marginRight: '0.5em' }} src={channelThumbnail} alt={channelTitle} />
        <div className="video__desc">
          <h3 className="video__title">{title}</h3>
          <p className="video__channel">{channelTitle}</p>
          <p>
            <span className="video__views">{getCount(viewCount)} views</span>
            <span className="video__timestamp">{getPublishedDate(publishedAt)}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Video;
