import { useEffect } from 'react';
import { auth } from '../config/firebase';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from '../features/userSlice';

import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import Login from '../Components/Login';
import WatchScreen from '../Screens/WatchScreen';
import HomeScreen from '../Screens/HomeScreen.jsx';
import '../css/App.css';
import SearchScreen from '../Screens/SearchScreen';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

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
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Switch>
              <Route path="/search/:query">
                <SearchScreen />
              </Route>
              <Route path="/watch/:id">
                <WatchScreen />
              </Route>
              <Route exact path="/">
                <HomeScreen />
              </Route>
              <Route>
                <Redirect to="/" />
              </Route>
            </Switch>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
