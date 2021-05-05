import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThumbDown, ThumbUp } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import { getCount, getPublishedDate } from '../utils/basicFunctions';
import {
  selectSubscriptionStatus,
  setChannel,
  setChannelError,
  setLoading,
  setSubscriptionStatus,
  setSubscriptionStatusError,
} from '../features/channelSlice';
import Avatar from './Avatar';
import axios from '../utils/axios';
import { getChannelDetails } from '../utils/requests';
import '../css/VideoMetaData.css';
import { useHistory } from 'react-router';

const VideoMetaData = ({ video }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);
  const [subscribers, setSubscribers] = useState(0);
  const [thumbnail, setThumbnail] = useState('');

  const subscribed = useSelector(selectSubscriptionStatus);

  // This is not a good method as it is not catching the error, whereas the optional-chaining is catching the errors
  // const {
  //   snippet: { title, description, publishedAt, channelId, channelTitle },
  //   statistics: { viewCount, likeCount, dislikeCount },
  // } = video;

  const history = useHistory();

  // Using useEffect for fetching data for the channelDetails
  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(setLoading(true));
        const { data } = await axios.get(getChannelDetails(video?.snippet?.channelId));
        setSubscribers(data?.items[0]?.statistics?.subscriberCount);
        setThumbnail(data?.items[0]?.snippet?.thumbnails?.medium?.url);
        dispatch(setChannel(data?.items[0]));
        dispatch(setLoading(false));
      } catch (error) {
        dispatch(setChannelError(error));
      }
    };
    fetchData();
  }, [video?.snippet?.channelId]);

  // useEffect for the subscription status
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios('/subscriptions', {
          params: {
            part: 'snippet',
            forChannelId: video?.snippet?.channelId,
            mine: true,
          },
          headers: {
            Authorization: `Bearer ${localStorage.accessToken}`,
          },
        });
        dispatch(setSubscriptionStatus(res?.data?.items?.length > 0 ? true : false));
      } catch (error) {
        dispatch(setSubscriptionStatusError(error));
      }
    };
    fetchData();
  }, [video?.snippet?.channelId]);

  return (
    <div className="videoMetaData">
      <div className="videoMetaData__top">
        <h3 className="videoMetaData__title">{video?.snippet?.title}</h3>
        <div className="videoMetaData__stats">
          <div className="videoMetaData__left">
            <span>{getCount(video?.statistics?.viewCount)} views</span>
            <span>•</span>
            <span>{getPublishedDate(video?.snippet?.publishedAt)}</span>
          </div>
          <div className="videoMetaData__right">
            <span className="videoMetaData__like">
              <IconButton>
                <ThumbUp />
              </IconButton>
              {getCount(video?.statistics?.likeCount)}
            </span>
            <span className="videoMetaData__dislike">
              <IconButton>
                <ThumbDown />
              </IconButton>
              {getCount(video?.statistics?.dislikeCount)}
            </span>
          </div>
        </div>
      </div>
      <div className="videoMetaData__channel">
        <Avatar src={thumbnail} />
        <div className="videoMetaData__channelDetails">
          <h4
            className="videoMetaData__channelTitle"
            onClick={() => history.push(`/channel/${video?.snippet?.channelId}`)}
          >
            {video?.snippet?.channelTitle}
          </h4>
          <p className="videoMetaData__channelSubscribers">{getCount(subscribers)} subscribers</p>
        </div>
        {subscribed ? (
          <button className="videoMetaData__btn subscribed">Subscribed</button>
        ) : (
          <button className="videoMetaData__btn">Subscribe</button>
        )}
      </div>
      <div className="videoMetaData__description">
        <p className={`${show ? '' : 'show_more'}`}>{video?.snippet?.description}</p>
        <button onClick={() => setShow((prev) => !prev)}>{show ? 'show more' : 'show less'}</button>
      </div>
    </div>
  );
};

export default VideoMetaData;
