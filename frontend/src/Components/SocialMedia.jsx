import React from 'react'
import {FaLinkedinIn,FaFacebookF} from 'react-icons/fa'
const SocialMedia = () => {
  return (
    <div className='app_social'>
          <a href = 'https://www.linkedin.com/in/hadar-zaguri-097487220/'>
          <div>
            <FaLinkedinIn/>
          </div>
        </a>

        <a href='https://www.facebook.com/HADARIII123'>
          <div>
              <FaFacebookF/>
          </div>
        </a>
      
    </div>
  )
}

export default SocialMedia