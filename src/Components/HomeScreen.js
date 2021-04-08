import { useEffect, useState } from 'react';
import CategoriesBar from './CategoriesBar';
import Video from './Video';
import axios from '../utils/axios';
import { getMostPopularVideos } from '../utils/requests';
import '../css/HomeScreen.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectMostPopularVideos,
  selectPageToken,
  setMostPopularMovies,
  setPageToken,
} from '../features/videoSlice';

const HomeScreen = () => {
  const dispatch = useDispatch(),
    videos = useSelector(selectMostPopularVideos),
    pageToken = useSelector(selectPageToken);

  useEffect(() => {
    const fetchMostPopular = async () => {
      const res = await axios.get(getMostPopularVideos(''));
      dispatch(setPageToken(res.data.nextPageToken));
      dispatch(setMostPopularMovies(res.data.items));
    };
    fetchMostPopular();
  }, []);

  return (
    <>
      <CategoriesBar />
      <div className="homescreen__videos">
        {videos.map((video) => (
          <Video key={video.id} video={video} />
        ))}
      </div>
    </>
  );
};

export default HomeScreen;
