import React from 'react'
import './JobDetailsPage.css'
import SearchIcon from '../../assets/icons/searchicon.png'

const JobDetailsPage = () => {
  return (
    <div>
      <div>
        <div className='job_details_navbar'>
          <div>
            <h1>Jobfinder</h1>
          </div>

          <div className='two_buttons'>
            <button className='btn_login'>Login</button>
            <button className='btn_register'>Register</button>
          </div>
        </div>

        <div className='job_details_div'>
          <div className='job_search_div'>

            <div className='input_search'>
              <div className='searchicon_div'>
                <img src={SearchIcon} alt="search icon" />
              </div>

              <div className='searchinput_div'>
                <input type="text" placeholder='Type any job title' />
              </div>
            </div>

            <div className='select_skills_div'>

              <div className='select_div'>
                <div className='select_option_div'>
                  <select>
                    <option>Skills</option>
                    <option>Frontend</option>
                    <option>CSS</option>
                    <option>JavaScript</option>
                  </select>
                  <div className='select_icon'>
                    <i className="fa-solid fa-caret-down" style={{ color: '#a1a1a1' }}></i>
                  </div>
                </div>

                <div className='selected_skills_div'>
                  <div className='selected_skills'>
                    <p>dsfsdf</p>
                  </div>
                </div>
              </div>

              <button className='btn_clear'>Clear</button>
            </div>

          </div>

          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobDetailsPage