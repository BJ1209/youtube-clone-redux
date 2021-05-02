import { useEffect, useState } from 'react';
import axios from '../utils/axios';
import { getChannelDetails } from '../utils/requests';
import { getCount } from '../utils/basicFunctions';
import '../css/Channel.css';

const Channel = ({ channel, channelId }) => {
  const [subscriberCount, setSubscriberCount] = useState(0);
  const [videoCount, setVideoCount] = useState(0);

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

  return (
    <div className="channel">
      <div className="channel__channelImage">
        <img src={channel?.thumbnails?.medium?.url} alt={channel?.channelTitle} />
      </div>
      <div className="channel__channelDetails">
        <h3 className="channel__title">{channel?.channelTitle}</h3>
        <div className="channel__stats">
          <span>{getCount(subscriberCount)} subscribers</span>
          <span>•</span>
          <span>{videoCount} videos</span>
        </div>
        <div className="channel__description">{channel?.description}</div>
      </div>
    </div>
  );
};

export default Channel;
