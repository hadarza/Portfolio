import React from 'react'
import BoxContext from '../../Components/BoxContext/BoxContext'
const about = () => {
  return (
    <div className="AboutMe-section">
      <h1 className="AboutMe__title">About Me..</h1>
      <div id="line"></div>
    <h2>
      I'm <span> a self-learner</span> and<span> curious </span> <br/> <span> motivated, hard worker</span></h2><h2>I served in the army for 2 years as unity and web developer, and now I'm working as IDF employee, and at the same time study for my bacheloer's degree in computer sciene. </h2>
      <BoxContext/>

      <div>
        <button className='email-btn'><a href="mailto:hadar.zaguri@gmail.com">Contact me via Mail</a></button>
        <button className="cv-btn">Download CV</button>
      </div>

    </div>
  )
}

export default about