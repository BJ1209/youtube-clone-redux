import { useEffect, useState } from 'react';
import CategoriesBar from './CategoriesBar';
import Video from './Video';
import axios from '../utils/axios';
import { getMostPopularVideos } from '../utils/requests';
import { useDispatch, useSelector } from 'react-redux';
import '../css/HomeScreen.css';
import {
  selectHomeVideos,
  selectPageToken,
  setPageToken,
  setHomeVideos,
} from '../features/videoSlice';
import InfiniteScroll from 'react-infinite-scroll-component';

const HomeScreen = () => {
  const dispatch = useDispatch(),
    videos = useSelector(selectHomeVideos),
    pageToken = useSelector(selectPageToken);

  const fetchMostPopular = async () => {
    const res = await axios.get(getMostPopularVideos(pageToken));
    dispatch(setPageToken(res.data.nextPageToken));
    dispatch(setHomeVideos(res.data.items));
  };

  useEffect(() => {
    fetchMostPopular();
  }, []);

  const fetchData = () => {
    setTimeout(() => {
      console.log('asd');
    }, 1000);
  };

  return (
    <>
      <CategoriesBar />
      <InfiniteScroll
        className="homescreen__videos"
        dataLength={videos.length}
        next={fetchData}
        hasMore={true}
        loader={<div className="spin"></div>}
      >
        {videos.map((video) => (
          <Video key={video?.id?.videoId || video.id} video={video} />
        ))}
      </InfiniteScroll>
    </>
  );
};

export default HomeScreen;
