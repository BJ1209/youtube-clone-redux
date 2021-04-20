import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ThumbDown, ThumbUp } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import { getCount, getPublishedDate } from '../utils/basicFunctions';
import { setChannel, setLoading } from '../features/channelSlice';
import Avatar from './Avatar';
import axios from '../utils/axios';
import { getChannelDetails } from '../utils/requests';
import '../css/VideoMetaData.css';

const VideoMetaData = ({ video }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);
  const [subscribers, setSubscribers] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const {
    snippet: { title, description, publishedAt, channelId, channelTitle },
    statistics: { viewCount, likeCount, dislikeCount },
  } = video;

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(setLoading(true));
        const { data } = await axios.get(getChannelDetails(channelId));
        setSubscribers(data?.items[0]?.statistics?.subscriberCount);
        setThumbnail(data?.items[0]?.snippet?.thumbnails?.medium?.url);
        dispatch(setChannel(data?.items[0]));
        dispatch(setLoading(false));
      } catch (error) {
        alert(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="videoMetaData">
      <div className="videoMetaData__top">
        <h3 className="videoMetaData__title">{title}</h3>
        <div className="videoMetaData__stats">
          <div className="videoMetaData__left">
            <span>{getCount(viewCount)} views</span>
            <span>•</span>
            <span>{getPublishedDate(publishedAt)}</span>
          </div>
          <div className="videoMetaData__right">
            <span className="videoMetaData__like">
              <IconButton>
                <ThumbUp />
              </IconButton>
              {getCount(likeCount)}
            </span>
            <span className="videoMetaData__dislike">
              <IconButton>
                <ThumbDown />
              </IconButton>
              {getCount(dislikeCount)}
            </span>
          </div>
        </div>
      </div>
      <div className="videoMetaData__channel">
        <Avatar src={thumbnail} />
        <div className="videoMetaData__channelDetails">
          <h4 className="videoMetaData__channelTitle">{channelTitle}</h4>
          <p className="videoMetaData__channelSubscribers">{getCount(subscribers)} subscribers</p>
        </div>
        <button className="videoMetaData__btn">Subscribe</button>
      </div>
      <div className="videoMetaData__description">
        <p className={`${show ? '' : 'show_more'}`}>{description}</p>
        <button onClick={() => setShow((prev) => !prev)}>{show ? 'show more' : 'show less'}</button>
      </div>
    </div>
  );
};

export default VideoMetaData;
