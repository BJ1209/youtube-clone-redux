import { useEffect, useState } from 'react';
import axios from '../utils/axios';
import { getChannelDetails } from '../utils/requests';
import { getCount, getSubstring } from '../utils/basicFunctions';
import '../css/Channel.css';
import { useHistory } from 'react-router';

const Channel = ({ channel, channelId, channelScreen, subscriptionScreen }) => {
  const [subscriberCount, setSubscriberCount] = useState(0);
  const [videoCount, setVideoCount] = useState(0);
  const history = useHistory();

  // useEffect for the subscriber  and video count.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(getChannelDetails(channelId));
        const stats = data?.items[0]?.statistics;
        setSubscriberCount(stats?.subscriberCount);
        setVideoCount(stats?.videoCount);
      } catch (error) {
        console.log(error?.message);
      }
    };
    fetchData();
  }, [channelId]);

  const clickHandler = () => (!channelScreen ? history.push(`/channel/${channelId}`) : null);

  return (
    <div className={`channel ${!channelScreen ? 'channel--screen' : ''}`} onClick={clickHandler}>
      <div className={`channel__channelImage`}>
        <img
          className={channelScreen ? 'channelScreen--image' : ''}
          src={channel?.thumbnails?.medium?.url}
          alt={channel?.channelTitle}
        />
      </div>
      <div className="channel__channelDetails">
        <h3 className="channel__title">{channel?.channelTitle || channel?.title}</h3>
        <div className="channel__stats">
          <span>{getCount(subscriberCount)} subscribers</span>
          <span>•</span>
          <span>{videoCount} videos</span>
        </div>
        {!channelScreen && (
          <div className="channel__description">
            {subscriptionScreen ? getSubstring(channel?.description, 180) : channel?.description}
          </div>
        )}
      </div>
    </div>
  );
};

export default Channel;
