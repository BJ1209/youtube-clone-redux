import '../css/Comment.css';
import Avatar from './Avatar';
const Comment = () => {
  return (
    <div className="comment">
      <Avatar src="https://material-ui.com/static/ads-in-house/divjoy.png" />
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
