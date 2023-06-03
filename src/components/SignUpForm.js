import React from 'react'
import './SignUpForm.css';
function SignUpForm() {
  return (
    <div className='signUp_div'>
    <p className='heading'>Sign Up</p>
    <form className='form'>
    <div className='names'>
     <span>   
    <p className='label'>FIRST NAME</p>
    <input className="input_text" id="firstName" type='text' placeholder='First Name'/>
    </span>
    <span>
    <p className='label'>LAST NAME</p>
    <input className="input_text" id="lastName" type='text' placeholder='Last Name'/>
    </span>
    </div>
    <p className='label'>EMAIL</p>
    <input className="input_text" id="username" type='email' placeholder='Email'/>
    <p className='label'>PASSWORD</p>
    <input className="input_text" id="password" type="password" placeholder='Password'/>
    <button className='singnin_btn' type="submit">Sign Up</button>
    </form></div>
  )
}

export default SignUpForm