import '../css/HomeScreen.css';
import CategoriesBar from './CategoriesBar';
import Video from './Video';
import '../css/HomeScreen.css';
const HomeScreen = () => {
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
