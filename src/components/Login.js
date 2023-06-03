import React ,{useState}from 'react';
import "./Login.css";
import LoginForm from './LoginForm';
import ToggleDiv from './ToggleDiv';
import SignUpForm from './SignUpForm';

function Login() {
  const [isLogin,setLogin] = useState(false);
  const onClickHandler = () => {
    setLogin(!isLogin);
  }

  return (
    <div className='login_card'>
            {isLogin ? <LoginForm /> : <ToggleDiv heading="Welcome to sign up" question="have an account?" buttonLabel="Log In" onClickHandler={onClickHandler}/>}
            {isLogin ? <ToggleDiv heading="Welcome to login" question="Don't have an account?" buttonLabel="Sign Up" onClickHandler={onClickHandler}/> :<SignUpForm /> }
    </div>
  )
}

export default Login