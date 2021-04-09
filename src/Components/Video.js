import { useEffect, useState } from 'react';
import axios from '../utils/axios';
import { Avatar } from '@material-ui/core';
import { QueueMusic, Schedule } from '@material-ui/icons';
import { getDuration, getPublishedDate, getViewCount } from '../utils/basicFunctions';
import { getChannelDetails, getVideoDetails } from '../utils/requests';
import '../css/Video.css';

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

  // UseEffect For Channel Thumbnail
  useEffect(() => {
    const fetchDetails = async () => {
      const res = await axios.get(getChannelDetails(channelId));
      setChannelThumbnail(res?.data?.items[0]?.snippet?.thumbnails?.medium?.url);
    };
    fetchDetails();
  }, [channelId]);

  // UseEffect for Video Details
  useEffect(() => {
    const fetchDetails = async () => {
      const res = await axios.get(getVideoDetails(_videoId));
      setDuration(res?.data?.items[0]?.contentDetails?.duration);
      setViewCount(res?.data?.items[0]?.statistics?.viewCount);
    };
    fetchDetails();
  }, []);

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
        <Avatar src={channelThumbnail} alt={channelTitle} className="video__avatar" />
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
