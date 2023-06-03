import React from 'react'
import './LoginForm.css';
function LoginForm() {
  return (
    <div className='login_div'>
        <p className='heading'>Sign In</p>
        <form className='form'>
        <p className='label'>USERNAME</p>
        <input className="input_text" id="username" type='text' placeholder='Username'/>
        <p className='label'>PASSWORD</p>
        <input className="input_text" id="password" type="password" placeholder='Password'/>
        <button className='singnin_btn' type="submit">Sign In</button>
        </form>

    </div>
  )
}

export default LoginForm