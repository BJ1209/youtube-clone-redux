import { useEffect, useState } from 'react';
import axios from '../utils/axios';
import '../css/CategoriesBar.css';
import { getVideosByCategory } from '../utils/requests';
import { useDispatch, useSelector } from 'react-redux';
import { selectActiveCategory, setActiveCategory, setHomeVideos } from '../features/videoSlice';

const categories = [
  'All',
  'ReactJs',
  'css',
  'BodyBuilding',
  'Computer Programming',
  'Podcasts',
  'Firebase',
  'javascript',
  'Flutter',
  'Comedy',
  'Crypto Currency',
  'Machine Learning',
  'Websites',
  'BasketBall',
];

const CategoriesBar = () => {
  const dispatch = useDispatch();
  const activeCategory = useSelector(selectActiveCategory);

  const fetchVideos = async () => {
    try {
      if (activeCategory !== 'All') {
        const res = await axios.get(getVideosByCategory(activeCategory));
        dispatch(setHomeVideos(res?.data?.items));
      }
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, [activeCategory]);

  const activeElementHandler = (category) => {
    dispatch(setActiveCategory(category));
  };

  return (
    <div className="categoriesBar">
      {categories.map((category, index) => (
        <button
          className={activeCategory === category ? 'active' : ''}
          key={index}
          onClick={() => activeElementHandler(category)}
        >
          <p>{category}</p>
        </button>
      ))}
    </div>
  );
};

export default CategoriesBar;
