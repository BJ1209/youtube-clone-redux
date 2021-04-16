import { Avatar, IconButton } from '@material-ui/core';
import { ThumbDown, ThumbUp } from '@material-ui/icons';
import { useState } from 'react';
import '../css/VideoMataData.css';

const VideoMetaData = () => {
  const text = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dignissimos aperiam
          laborum doloribus facilis, numquam modi quo perferendis ipsa. Et nesciunt, commodi
          provident similique labore quas quo ullam sequi aut delectus reprehenderit odio laborum
          atque, libero enim modi. Quia dolor nobis autem repellat, quae recusandae quasi! Aperiam
          consequuntur similique ut? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Dolorem dignissimos aperiam laborum doloribus facilis, numquam modi quo perferendis ipsa.
          Et nesciunt, commodi provident similique labore quas quo ullam sequi aut delectus
          reprehenderit odio laborum atque, libero enim modi. Quia dolor nobis autem repellat, quae
          recusandae quasi! Aperiam consequuntur similique ut? Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Dolorem dignissimos aperiam laborum doloribus facilis,
          numquam modi quo perferendis ipsa. Et nesciunt, commodi provident similique labore quas
          quo ullam sequi aut delectus reprehenderit odio laborum atque, libero enim modi. Quia
          dolor nobis autem repellat, quae recusandae quasi! Aperiam consequuntur similique ut?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dignissimos aperiam
          laborum doloribus facilis, numquam modi quo perferendis ipsa. Et nesciunt, commodi
          provident similique labore quas quo ullam sequi aut delectus reprehenderit odio laborum
          atque, libero enim modi. Quia dolor nobis autem repellat, quae recusandae quasi! Aperiam
          consequuntur similique ut? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Dolorem dignissimos aperiam laborum doloribus facilis, numquam modi quo perferendis ipsa.
          Et nesciunt, commodi provident similique labore quas quo ullam sequi aut delectus
          reprehenderit odio laborum atque, libero enim modi. Quia dolor nobis autem repellat, quae
          recusandae quasi! Aperiam consequuntur similique ut? Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Dolorem dignissimos aperiam laborum doloribus facilis,
          numquam modi quo perferendis ipsa. Et nesciunt, commodi provident similique labore quas
          quo ullam sequi aut delectus reprehenderit odio laborum atque, libero enim modi. Quia
          dolor nobis autem repellat, quae recusandae quasi! Aperiam consequuntur similique ut?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dignissimos aperiam
          laborum doloribus facilis, numquam modi quo perferendis ipsa. Et nesciunt, commodi
          provident similique labore quas quo ullam sequi aut delectus reprehenderit odio laborum
          atque, libero enim modi. Quia dolor nobis autem repellat, quae recusandae quasi! Aperiam
          consequuntur similique ut? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Dolorem dignissimos aperiam laborum doloribus facilis, numquam modi quo perferendis ipsa.
          Et nesciunt, commodi provident similique labore quas quo ullam sequi aut delectus
          reprehenderit odio laborum atque, libero enim modi. Quia dolor nobis autem repellat, quae
          recusandae quasi! Aperiam consequuntur similique ut? Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Dolorem dignissimos aperiam laborum doloribus facilis,
          numquam modi quo perferendis ipsa. Et nesciunt, commodi provident similique labore quas
          quo ullam sequi aut delectus reprehenderit odio laborum atque, libero enim modi. Quia
          dolor nobis autem repellat, quae recusandae quasi! Aperiam consequuntur similique ut?
`;
  const [show, setShow] = useState(true);
  return (
    <div className="videoMetaData">
      <div className="videoMetaData__top">
        <h3 className="videoMetaData__title">
          Fully Functional YouTube Clone | React | Redux | Firebase | YouTube API |
        </h3>
        <div className="videoMetaData__stats">
          <div className="videoMetaData__left">
            <span>views</span>•<span>ago</span>
          </div>
          <div className="videoMetaData__right">
            <span className="videoMetaData__like">
              <IconButton>
                <ThumbUp />
              </IconButton>
              10k
            </span>
            <span className="videoMetaData__dislike">
              <IconButton>
                <ThumbDown />
              </IconButton>
              749
            </span>
          </div>
        </div>
      </div>
      <div className="videoMetaData__channel">
        <Avatar />
        <div className="videoMetaData__channelDetails">
          <h4 className="videoMetaData__channelTitle">Channel Name</h4>
          <p className="videoMetaData__channelSubscribers">500k subscribers</p>
        </div>
        <button className="videoMetaData__btn">Subscribe</button>
      </div>
      <div className="videoMetaData__description">
        <p className={`${show ? '' : 'show_more'}`}>{text}</p>
        <button onClick={() => setShow((prev) => !prev)}>{show ? 'show more' : 'show less'}</button>
      </div>
    </div>
  );
};

export default VideoMetaData;
