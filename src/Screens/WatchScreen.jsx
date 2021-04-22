import { useEffect } from 'react';
import { useParams } from 'react-router';
import Comments from '../Components/Comments';
import VideoHorizontal from '../Components/VideoHorizontal';
import VideoMetaData from '../Components/VideoMetaData';
import axios from '../utils/axios';
import '../css/WatchScreen.css';
import { getVideoDetails } from '../utils/requests';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoading, selectVideo, setLoading, setVideo } from '../features/selectedVideoSlice';
const WatchScreen = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const video = useSelector(selectVideo);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(getVideoDetails(id));
        dispatch(setVideo(data?.items[0]));
        dispatch(setLoading(false));
      } catch (error) {
        alert(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="watchscreen">
      <div className="watchscreen__left">
        <div className="watchscreen__player">
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            title={video?.snippet?.title}
            allowFullScreen
            width="100%"
            height="100%"
          ></iframe>
        </div>
        {!loading ? <VideoMetaData video={video} /> : <h3>loading</h3>}
        <Comments videoId={id} />
      </div>
      <div className="watchscreen__right">
        {[...Array(20)].map((_, index) => (
          <VideoHorizontal key={index} />
        ))}
      </div>
    </div>
  );
};

export default WatchScreen;
