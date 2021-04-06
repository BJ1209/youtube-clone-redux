import { Avatar } from '@material-ui/core';
import { QueueMusic, Schedule } from '@material-ui/icons';
import '../css/Video.css';

const Video = () => {
  return (
    <div className="video">
      <div className="video__container">
        <img
          src="https://material-ui.com/static/ads-in-house/figma.png"
          alt="Video Poster"
          className="video__image"
        />
        <div className="video__time">10:20</div>
        <button className="video__btn schedule">
          <Schedule />
        </button>
        <button className="video__btn queue ">
          <QueueMusic />
        </button>
      </div>
      <div className="video__info">
        <Avatar
          src="https://yt3.ggpht.com/ytc/AAUvwnijTRHNRno0y9_HZN3s8mrRlt6e4Vx_mUtDyM9bVQ=s68-c-k-c0x00ffffff-no-rj"
          className="video__avatar"
        />
        <div className="video__desc">
          <h3 className="video__title">How THE ROCK is making Black Adam Physique</h3>
          <p className="video__channel">Jeet Salal Asthetics</p>
          <p>
            <span className="video__views">51k views</span>
            <span className="video__timestamp">20 hours ago </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Video;
