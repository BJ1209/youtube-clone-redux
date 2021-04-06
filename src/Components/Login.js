import '../css/Login.css';
import { ReactComponent as YouTubeLogo } from '../Assets/logo/youtube.svg';
const Login = () => {
  return (
    <div className="login">
      <div className="login__container">
        <h1 className="login__title">Youtube Clone</h1>
        <YouTubeLogo className="login__logo" />
        <button className="login__button">Login with Google</button>
        <p className="login__description">
          This Project is made using ReactJs, Firebase and YouTube API.
        </p>
      </div>
    </div>
  );
};

export default Login;
