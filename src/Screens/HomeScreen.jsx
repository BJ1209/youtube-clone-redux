import CategoriesBar from '../Components/CategoriesBar';
import Video from '../Components/Video';
import { useDispatch, useSelector } from 'react-redux';
import { selectHomeVideos, setPageToken } from '../features/videoSlice';
import Loader from '../Components/Loader';
import '../css/HomeScreen.css';
import useFetchVideos from '../hooks/useFetchVideos';
import HomeSkeleton from '../Skeleton/HomeSkeleton';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const videos = useSelector(selectHomeVideos);
  const { loading, page } = useFetchVideos();

  const scrollHandler = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    if (scrollHeight - scrollTop === clientHeight) {
      dispatch(setPageToken(page));
    }
  };

  return (
    <div className="homescreen">
      <CategoriesBar />
      <div className="homescreen__videos" onScroll={scrollHandler}>
        {videos.length !== 0
          ? videos.map((video) => <Video key={video?.id?.videoId || video.id} video={video} />)
          : [...Array(20)].map((_, index) => <HomeSkeleton key={index} />)}
      </div>
      {loading && <Loader />}
    </div>
  );
};

export default HomeScreen;
