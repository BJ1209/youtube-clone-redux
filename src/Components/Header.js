import { useState } from 'react';
// import { Link } from 'react-router-dom';

import { Avatar, IconButton } from '@material-ui/core';
import { Apps, Menu, Notifications, Search, VideoCall } from '@material-ui/icons';

import { ReactComponent as YouTubeLogo } from '../Assets/logo/youtube-full.svg';
import '../css/Header.css';

const Header = () => {
  const [input, setInput] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <header className="header">
      <div className="header__left">
        <IconButton>
          <Menu id="hamburgerIcon" className="header__icon" />
        </IconButton>
        <YouTubeLogo className="header__logo" alt="Youtube logo" />
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
            <Search className="header__icon" />
          </button>
        </form>
      </div>
      <div className="header__right">
        <IconButton>
          <VideoCall className="header__icon" />
        </IconButton>
        <IconButton>
          <Apps className="header__icon" />
        </IconButton>
        <IconButton>
          <Notifications className="header__icon" />
        </IconButton>
        <Avatar className="header__avatar" />
      </div>
    </header>
  );
};

export default Header;
