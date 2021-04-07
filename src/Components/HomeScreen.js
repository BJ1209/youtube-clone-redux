import { useEffect, useState } from 'react';
import CategoriesBar from './CategoriesBar';
import Video from './Video';
import axios from '../utils/axios';
import requests from '../utils/requests';
import '../css/HomeScreen.css';

const HomeScreen = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchMostPopular = async () => {
      const res = await axios.get(requests.mostPopularVideos);
      // const data = await res.json();
      setVideos(res.data.items);
    };
    fetchMostPopular();
  }, []);

  console.log(videos);

  return (
    <>
      <CategoriesBar />
      <div className="homescreen__videos">
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
      </div>
    </>
  );
};

export default HomeScreen;
