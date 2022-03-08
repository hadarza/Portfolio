import React,{useState, useEffect} from 'react'
import {images} from '../../constants'
import {motion} from 'framer-motion'
import { urlFor,client } from '../../client'
const BoxContext = () => {

  const [AboutContext, setAboutContext] = useState([])

  useEffect(() => {
    const query = '*[_type  == "abouts"]'
    client.fetch(query)
    .then((data) => setAboutContext(data))
  }, [])
  return (
  <div className="box-Image">
    {AboutContext.map((about,index) =>(
      <motion.div
      whileInView={{opacity:1}}
      whileHover={{scale:1.1, opacity:0.8, color:'black'}}
      transition={{duration:0.5, type:'tween'}}
      className="app__profile-items"
      key={about.title + index}
      style={{backgroundImage:"url(" + urlFor(about.background) + ")"}}>
        <div className="colorful-div" style={{backgroundImage: about.colorful }} >
          <div className="card-info">
            <img className='icon-about' alt={about.title} src={urlFor(about.icon)}/>
            <div className="info-context">
              <h1>{about.title}</h1>
              <h3>{about.desctiption}</h3>
            </div>
          </div>
        </div>
        
      </motion.div>
    ))}
  </div>
  )
}

export default BoxContext