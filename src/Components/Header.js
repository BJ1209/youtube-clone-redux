import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import { Apps, Menu, Notifications, Search, VideoCall } from '@material-ui/icons';

import { ReactComponent as YouTubeLogo } from '../Assets/logo/youtube-full.svg';
import '../css/Header.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import Avatar from './Avatar';
import { auth } from '../config/firebase';

const Header = () => {
  const [input, setInput] = useState('');
  const user = useSelector(selectUser);
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    history.push(`/search/${input}`);
  };

  return (
    <header className="header">
      <div className="header__left">
        <IconButton>
          <Menu id="hamburgerIcon" />
        </IconButton>
        <Link to="/" title="YouTube Home">
          <YouTubeLogo className="header__logo" alt="Youtube logo" />
        </Link>
      </div>
      <div className="header__center">
        <form className="header__centerIn" onSubmit={submitHandler}>
          <input
            autoComplete="on"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Search"
          />
          <button type="submit">
            <Search />
          </button>
        </form>
      </div>
      <div className={`header__right ${user ? 'user' : ''}`}>
        {user && (
          <IconButton className="header__iconBtn">
            <VideoCall className="header__icon" />
          </IconButton>
        )}
        <IconButton className="header__iconBtn">
          <Apps className="header__icon" />
        </IconButton>
        {user && (
          <IconButton className="header__iconBtn">
            <Notifications className="header__icon" />
          </IconButton>
        )}
        <Avatar style={{ width: 35, height: 35 }} src={user?.photoURL} />
      </div>
    </header>
  );
};

export default Header;
