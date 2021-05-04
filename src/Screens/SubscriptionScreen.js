import { useSelector } from 'react-redux';
import Channel from '../Components/Channel';
import '../css/SubscriptionScreen.css';
import { selectSubscriptions } from '../features/subscriptionSlice';
const SubscriptionScreen = () => {
  const subscriptions = useSelector(selectSubscriptions)?.map((subscription) => (
    <Channel
      subscriptionScreen
      key={subscription?.id}
      channelId={subscription?.snippet?.resourceId?.channelId}
      channel={subscription?.snippet}
    />
  ));
  return <div className="subscriptionScreen">{subscriptions}</div>;
};

export default SubscriptionScreen;
