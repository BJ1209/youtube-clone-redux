import Header from '../Components/Header';
import HomeLayout from '../Components/HomeLayout';
import HomeScreen from '../Components/HomeScreen';
import Sidebar from '../Components/Sidebar';
import '../css/App.css';
function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        <HomeLayout>
          <HomeScreen />
        </HomeLayout>
      </div>
    </div>
  );
}

export default App;
