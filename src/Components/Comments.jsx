import { useEffect, useState } from 'react';
import Comment from './Comment';
import Avatar from './Avatar';
import axios from '../utils/axios';
import { getCommentsByVideoId } from '../utils/requests';
import { useDispatch, useSelector } from 'react-redux';
import '../css/Comments.css';
import { selectComments, setComments, setNextPageToken } from '../features/commentsSlice';
import { selectUser } from '../features/userSlice';

const Comments = ({ videoId }) => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(getCommentsByVideoId(videoId));
        dispatch(setComments(data?.items));
        dispatch(setNextPageToken(data?.nextPageToken));
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [videoId]);

  const _comments = useSelector(selectComments)?.map(
    (comment) => comment.snippet.topLevelComment.snippet
  );
  const user = useSelector(selectUser);

  return (
    <div className="comments">
      <p className="comments__number">
        <span className="number">150</span> Comments
      </p>
      <form className="comments__form" onSubmit={submitHandler}>
        <Avatar src={user?.photoURL} />
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
        {_comments?.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
