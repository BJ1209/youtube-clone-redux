import '../css/Login.css';
import { ReactComponent as YouTubeLogo } from '../Assets/logo/youtube.svg';
import { ReactComponent as GoogleLogo } from '../Assets/logo/google.svg';
import { auth, googleProvider } from '../config/firebase';
import { useDispatch } from 'react-redux';
import { setError } from '../features/userSlice';

const Login = () => {
  const dispatch = useDispatch();
  const loginHandler = () => {
    try {
      auth
        .signInWithPopup(googleProvider)
        .then((user) => {
          const accessToken = user?.credential?.accessToken;
          localStorage.setItem('accessToken', accessToken);
        })
        .catch((err) => {
          alert(err.message);
          setError(err);
        });
    } catch (error) {
      dispatch(setError(error));
    }
  };

  return (
    <div className="login">
      <div className="login__container">
        <h1 className="login__title">Youtube Clone</h1>
        <YouTubeLogo className="login__logo" />
        <button className="login__button" onClick={loginHandler}>
          <span>
            <GoogleLogo className="login__googleLogo" />
          </span>
          <span>Login with Google</span>
        </button>
        <p className="login__description">
          This Project is made using ReactJs, Firebase and YouTube API.
        </p>
      </div>
    </div>
  );
};

export default Login;
