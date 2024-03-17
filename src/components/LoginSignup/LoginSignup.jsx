import React from 'react'
import email_icon from '../Assets/mail.png'
import password_icon from '../Assets/padlock.png'
import user_icon from '../Assets/user.png'

const LoginSignup = () => {
  return (
    <div className='container flex-col m-auto mt-[200px] bg-white pb-[30px]'>
        <div className='haeder flex-col items-center gap-[9px] w-[100%] mt-[30px]'>
            <div className='text'>Sign Up</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
            <div className='input'>
                <img src={user_icon} alt='' />
                <input type='text' />
            </div>
            <div className='input'>
                <img src={email_icon} alt='' />
                <input type='email' />
            </div>
            <div className='input'>
                <img src={password_icon} alt='' />
                <input type='password' />
            </div>

        </div>
        <div className='forgot password' >Forgot password <span>click here</span></div>
        <div className='submit-container'>
            <div className='submit'>Sign Up</div>
            <div className='submit'>Login</div>
        </div>
    </div>
  )
}

export default LoginSignup

