import React from 'react'
import './LoginPage.css'
import { Link } from 'react-router-dom'

const LoginPage = () => {
    return (
        <div>
            <div className='login_page_main'>
                <div className='login_login_form'>
                    <div className='login_first_div'>
                        <h1 className='create_account'>Already have an account?</h1>
                        <p className='personal_job'>Your personal job finder is here</p>
                    </div>


                    <div className='login_second_div_main'>
                        <div className='login_second_div'>
                            <input type="email" placeholder='Email' />
                            <input type="password" placeholder='Password' />
                        </div>
                    </div>

                    <div className='login_third_div'>
                        <div>
                            <button className='btnCreateAccount'>Sign in</button>
                        </div>
                        <div className='signInText'>
                            <p>Don’t have an account?&nbsp;&nbsp;<Link to='/register'><span>Sign Up</span></Link></p>
                        </div>
                    </div>
                </div>

                <div className='login_login_bg_main'>
                    <div className='login_login_bg'>
                        <h3>Your Personal Job Finder</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage