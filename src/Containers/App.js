import Header from '../Components/Header';
import HomeLayout from '../Components/HomeLayout';
import HomeScreen from '../Components/HomeScreen';
import Sidebar from '../Components/Sidebar';

import { Redirect, Route, Switch } from 'react-router-dom';
import '../css/App.css';
function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        <Switch>
          <Route path="/search/:searchId">
            <HomeLayout>
              <h1>Search Results</h1>
            </HomeLayout>
          </Route>
          <Route exact path="/">
            <HomeLayout>
              <HomeScreen />
            </HomeLayout>
          </Route>
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
