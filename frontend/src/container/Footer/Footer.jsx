import React,{useState,useEffect} from 'react'
import { images } from '../../constants'
import { motion } from 'framer-motion'
import { AppWrap , MotionWrap } from '../../wrapper'
import { urlFor , client } from '../../client'

const Footer = () => {
    const [formData, setFormData] = useState({ username: '', email: '', message: '' });
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
  
    const { username, email, message } = formData;
  
    const handleChangeInput = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
      console.log(formData.username + " , "+ formData.email + " , " + formData.message)
    };
  
    const handleSubmit = () => {
      setLoading(true);
  
      const contact = {
        _type: 'contact',
        name: formData.username,
        email: formData.email,
        message: formData.message,
      };
  
      client.create(contact)
        .then(() => {
          setLoading(false);
          setIsFormSubmitted(true);
        })
        .catch((err) => console.log(err));
    };
  return (
    <>
      <h1 className='h1-title'>Chat With Me</h1>   
      <div id="line"></div>

      <div className='app__footer_cards'>
        <div className='app__footer_card'>
          <img src={images.email} alt="email"/>
          <a href="mailto:hadar.zaguri@gmail.com" className='p-text'>hadar.zaguri@gmail.com</a>
        </div>

        <div className='app__footer_card'>
          <img src={images.mobile} alt="mobile"/>
          <a href="tel: +972 5299433" className='p-text'>Phone: 0525299433</a>
        </div>
      </div> 

      {!isFormSubmitted ? (
        <div className='app__footer-forms'>
          <div className='flex'>
          <input className="p-text" type="text" placeholder="Name" name="username" value={username} onChange={handleChangeInput} />
          </div>
          <div className='flex'>
            <input className='p-text' type="email" placeholder='email' name="email" value={email} onChange={handleChangeInput}/>
          </div>

          <div className='flex'>
            <textarea
            className='p-text'
            placeholder='Please enter your message'
            value={message}
            name="message"
            onChange={handleChangeInput}
            ></textarea>
          </div>

          <button type='Submit' className='submitBtn' onClick={handleSubmit}>{loading ? 'Sending...' : 'Send Message'}</button>
        </div>
      ): <h3 className='head-text'>Thank you for getting in touch!</h3>}
    </>
  )
}

export default AppWrap(MotionWrap(Footer,'app__Footer'),'Contact')