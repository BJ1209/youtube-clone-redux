import CategoriesBar from './CategoriesBar';
import Video from './Video';
import { useDispatch, useSelector } from 'react-redux';
import { selectHomeVideos, setPageToken } from '../features/videoSlice';
import Loader from './Loader';
import '../css/HomeScreen.css';
import useFetchVideos from '../hooks/useFetchVideos';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const videos = useSelector(selectHomeVideos);
  const { loading, page } = useFetchVideos();

  const scrollHandler = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    console.log({ scrollTop, scrollHeight, clientHeight });
    if (scrollHeight - scrollTop === clientHeight) {
      dispatch(setPageToken(page));
    }
  };

  return (
    <>
      <CategoriesBar />
      <div className="homescreen__videos" onScroll={scrollHandler}>
        {videos.map((video) => (
          <Video key={video?.id?.videoId || video.id} video={video} />
        ))}
      </div>
      {loading && <Loader />}
    </>
  );
};

export default HomeScreen;
