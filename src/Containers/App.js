import Header from '../Components/Header';
import HomeLayout from '../Components/HomeLayout';
import HomeScreen from '../Components/HomeScreen';
import Sidebar from '../Components/Sidebar';

import { Redirect, Route, Switch } from 'react-router-dom';
import { useEffect } from 'react';
import { auth } from '../config/firebase';
import { useDispatch } from 'react-redux';
import { login, logout } from '../features/userSlice';
import '../css/App.css';
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        const { displayName, email, uid, photoURL, phoneNumber } = authUser;

        dispatch(login({ displayName, email, uid, phoneNumber, photoURL }));
      } else {
        dispatch(logout());
      }
    });
  }, []);

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
