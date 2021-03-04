import { ReactComponent as YouTubeLogo } from '../Assets/logo/youtube.svg';
import '../css/Login.css';
const Login = () => {
  return (
    <div className="login">
      <YouTubeLogo className="login__logo" />
      <div className="login__description">
        <p>This is a YouTube Clone made using YouTube-API</p>
        <button>Login with Google</button>
      </div>
    </div>
  );
};

export default Login;
