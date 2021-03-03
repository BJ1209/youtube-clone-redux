import { useState } from 'react';
import '../css/CategoriesBar.css';

const categories = [
  'All',
  'ReactJs',
  'css',
  'BodyBuilding',
  'PUBG',
  'Computer Programming',
  'Podcasts',
  'Firebase',
  'javascript',
  'Flutter',
  'Comedy',
  'CryptoCurrency',
  'Machine Learning',
  'Websites',
  'conversations',
  'BasketBall',
];

const CategoriesBar = () => {
  const [activeElement, setActiveElement] = useState('All');

  console.log(activeElement);

  return (
    <div className="categoriesBar">
      {categories.map((category, index) => (
        <button key={index} onClick={() => setActiveElement(categories[index])}>
          <p>{category}</p>
        </button>
      ))}
    </div>
  );
};

export default CategoriesBar;
