import React from 'react'
import {motion} from 'framer-motion'
import {images} from '../../constants'
import { AppWrap } from '../../wrapper'

const Header = () => {

const scaleVariants = {
  whileInView:{
    scale: [0,1],
    opacity: [0,1],
    transition:{
      duration:1,
      ease: 'easeInOut'
    }
  }
}


  
  return (
    <div className="app__header">

        <motion.div
          whileInView={{opacity:[0,1]}}
          transition={{duration:1,delayChildren:0.5}}>
          <img className="img-me" src={images.prom} alt="imgOfMe"/>

          </motion.div>
        <motion.div
        whileInView={{x:[-100,0],opacity:[0,1]}}
        transition={{duration:0.5}}
        className="app__header__info">
          <div className="app-header-badge">
            <div className="badge-cmp">
              <span>👋🏻</span>
              <div style={{marginLeft:10}}>
                  <p className="p-text english">Hey, I'm</p>
                  <h1 className="p-text english englishBig"> Hadar Zaguri</h1>
              </div>
            </div>

            <div className="tag-cmp">
              <p className="p-text english"> I'M A WEB DEVELOPER</p>
            </div>
          </div>
        </motion.div>


         <motion.div 
            variants={scaleVariants}
            whileInView={scaleVariants.whileInView}
            className="app__header-circles"
            >
              {[images.git,images.node,images.react].map((circle,index)=>(
                <div className="circle-cmp" key={`circle-${index}`} >
                  <img src={circle} alt="circle"/>
                </div>
              ))}
            </motion.div> 
    </div>
  )
}

export default AppWrap(Header,'home')