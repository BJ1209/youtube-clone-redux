import { useState } from 'react';
import { Avatar } from '@material-ui/core';
import Comment from './Comment';
import '../css/Comments.css';
const Comments = () => {
  const [input, setInput] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="comments">
      <p className="comments__number">
        <span className="number">150</span> Comments
      </p>
      <form className="comments__form" onSubmit={submitHandler}>
        <Avatar className="comments__avatar" />
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="comments__textInput"
          placeholder="Add a public comment..."
        />
        <button type="reset" className="comments__btn">
          Cancel
        </button>
        <button disabled={!input} type="submit" className="comments__btn">
          Comment
        </button>
      </form>
      <div className="comments__comments">
        {[...Array(20)].map((_, index) => (
          <Comment key={index} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
