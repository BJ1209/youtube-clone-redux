import { useEffect, useState } from 'react';
import axios from '../utils/axios';
import { Avatar } from '@material-ui/core';
import { QueueMusic, Schedule } from '@material-ui/icons';
import '../css/Video.css';
import { getDuration, getPublishedDate, getViewCount } from '../utils/basicFunctions';
import { getChannelDetails } from '../utils/requests';

const Video = ({ video }) => {
  const {
    id,
    contentDetails: { duration },
    snippet: {
      title,
      channelId,
      channelTitle,
      thumbnails: { medium },
      publishedAt,
    },
    statistics: { viewCount },
  } = video;

  const [channelThumbnail, setChannelThumbnail] = useState('');

  useEffect(() => {
    const fetchDetails = async () => {
      const res = await axios.get(getChannelDetails(channelId));
      setChannelThumbnail(res?.data?.items[0]?.snippet?.thumbnails?.medium?.url);
    };
    fetchDetails();
  }, [channelId]);

  return (
    <div className="video">
      <div className="video__container">
        <img src={medium?.url} alt="Video Poster" className="video__image" />
        <div className="video__time">{getDuration(duration)}</div>
        <button className="video__btn schedule">
          <Schedule />
        </button>
        <button className="video__btn queue ">
          <QueueMusic />
        </button>
      </div>
      <div className="video__info">
        <Avatar src={channelThumbnail} className="video__avatar" />
        <div className="video__desc">
          <h3 className="video__title">{title}</h3>
          <p className="video__channel">{channelTitle}</p>
          <p>
            <span className="video__views">{getViewCount(viewCount)} views</span>
            <span className="video__timestamp">{getPublishedDate(publishedAt)}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Video;
