import '../css/Comment.css';
import { getPublishedDate } from '../utils/basicFunctions';
import Avatar from './Avatar';
const Comment = ({ comment }) => {
  const { textOriginal, authorDisplayName, authorProfileImageUrl, publishedAt } = comment;
  return (
    <div className="comment">
      <Avatar src={authorProfileImageUrl} />
      <div className="comment__details">
        <div className="comment__top">
          <span className="comment__name">{authorDisplayName}</span>
          <span className="comment__timestamp">{getPublishedDate(publishedAt)}</span>
        </div>
        <p className="comment__description">{textOriginal}</p>
      </div>
    </div>
  );
};

export default Comment;
