import { Avatar } from '@material-ui/core';
import '../css/Comment.css';
const Comment = () => {
  return (
    <div className="comment">
      <Avatar className="comment__avatar" />
      <div className="comment__details">
        <div className="comment__top">
          <span className="comment__name">asdfghjkl</span>
          <span className="comment__timestamp">2 months ago</span>
        </div>
        <div className="comment__description">
          I bet the future code learners won't have issues finding the greatest resources on the
          internet.
        </div>
      </div>
    </div>
  );
};

export default Comment;
