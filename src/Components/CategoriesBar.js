import { useState } from 'react';
import '../css/CategoriesBar.css';

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
  'conversations',
  'BasketBall',
];

const CategoriesBar = () => {
  const [activeElement, setActiveElement] = useState('All');

  const activeElementHandler = (category) => {
    setActiveElement(category);
  };

  return (
    <div className="categoriesBar">
      {categories.map((category, index) => (
        <button
          className={activeElement === category ? 'active' : ''}
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
