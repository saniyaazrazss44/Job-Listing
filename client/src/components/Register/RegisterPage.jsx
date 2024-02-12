import React from 'react'
import './RegisterPage.css'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
    return (
        <div>
            <div className='register_page_main'>
                <div className='register_login_form'>
                    <div className='register_first_div'>
                        <h1 className='create_account'>Create an account</h1>
                        <p className='personal_job'>Your personal job finder is here</p>
                    </div>


                    <div className='register_second_div_main'>
                        <div className='register_second_div'>
                            <input type="text" placeholder='Name' />
                            <input type="email" placeholder='Email' />
                            <input type="number" placeholder='Mobile' />
                            <input type="password" placeholder='Password' />
                        </div>
                        <div className='checkbox_div'>
                            <input type="checkbox" placeholder='Password' /><p>By creating an account, I agree to our terms of use and privacy policy</p>
                        </div>
                    </div>

                    <div className='register_third_div'>
                        <div>
                            <button className='btnCreateAccount'>Create Account</button>
                        </div>
                        <div className='signInText'>
                            <p>Already have an account?&nbsp;&nbsp;<Link to='/login'><span>Sign In</span></Link></p>
                        </div>
                    </div>
                </div>

                <div className='register_login_bg_main'>
                    <div className='register_login_bg'>
                        <h3>Your Personal Job Finder</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage