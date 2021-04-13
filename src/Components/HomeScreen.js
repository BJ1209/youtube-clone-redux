import { useEffect, useState } from 'react';
import CategoriesBar from './CategoriesBar';
import Video from './Video';
import axios from '../utils/axios';
import { getMostPopularVideos } from '../utils/requests';
import { useDispatch, useSelector } from 'react-redux';
import { selectHomeVideos, setHomeVideos } from '../features/videoSlice';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from './Loader';
import '../css/HomeScreen.css';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const [pageToken, setPageToken] = useState('');

  let videos = useSelector(selectHomeVideos);

  const fetchMostPopular = async () => {
    try {
      const res = await axios.get(getMostPopularVideos(pageToken));
      setPageToken(res.data.nextPageToken);
      dispatch(setHomeVideos(res.data.items));
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchMostPopular();
  }, []);

  return (
    <>
      <CategoriesBar />
      <InfiniteScroll
        className="homescreen__videos"
        dataLength={videos.length}
        next={fetchMostPopular}
        hasMore={true}
        loader={<Loader />}
      >
        {videos.map((video) => (
          <Video key={video?.id?.videoId || video.id} video={video} />
        ))}
      </InfiniteScroll>
    </>
  );
};

export default HomeScreen;
