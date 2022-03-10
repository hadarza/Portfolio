import React,{useState,useEffect} from 'react'
import {AiFillGithub,AiFillEye} from 'react-icons/ai'
import { motion } from 'framer-motion'
import { AppWrap } from '../../wrapper'
import { urlFor , client } from '../../client'
const Work = () => {
const [activeFilter, setactiveFilter] = useState('All')
const [Works, setWorks] = useState([])
const [animatedCard, setanimatedCard] = useState({y:0, opacity: 1})
const [filterWork, setfilterWork] = useState([])
useEffect(() => {
  const query = '*[_type == "works"]'
  client.fetch(query)
    .then((data)=>{
      setWorks(data);
      setfilterWork(data);
    })
}, [])

  const handleFilterWorks = (item) =>{
    setactiveFilter(item);
    console.log(item + " , "+ activeFilter)
    setanimatedCard([{y:100,opacity:0}])

    setTimeout(() => {
      setanimatedCard({y:0,opacity:1})
      if(item === "All")
        setfilterWork(Works)
      else setfilterWork(Works.filter((work)=> work.tags.includes(item)))
    }, 500);
  }
  return (
    <> 
      <h1 className="h1-title"> My creative<span> Apps</span></h1>
      <div id='line'></div>

      <div className='App_Work_Filter'>
        {['React', 'Unity', 'Sanity', 'MongoDB','All'].map((item,index)=>(
          <div
          key={index}
          onClick={()=>{handleFilterWorks(item)}}
          className={ `app__work__filter-item p-text ${activeFilter === item ? 'item-active': ''}`}
          >{item}</div>
        ))}
      
      </div>

      
      <motion.div
        animate={animatedCard}
        transition={{duration:0.5, delayChildren:0.5}}
        className="app__work-portfolio">
          {filterWork.map((work,index)=>(
           <div className='app__work-item' key={index}>
             <div className='app__work-img'>
                <img src={urlFor(work.imgUrl)} alt={work.name}/>
                <motion.div
                    whileHover={{opacity:[0,1]}}
                    transition={{duration:0.25,ease:'easeInOut',staggerChildren:0.5}}
                    className="app__work-hover">
                      <a href={work.projectLink} target="_blank" rel="noreferrer">
                        <motion.div
                            whileInView={{scale:[0,1]}}
                            whileHover={{scale: [1,0.9]}}
                            transition={{duration:0.25}}
                            className="flex">
                              <AiFillEye/>
                        </motion.div>
                      </a>

                      <a href={work.codeLink} target="_blank" rel="noreferrer">
                        <motion.div
                            whileHover={{scale: [1,0.9]}}
                            transition={{duration:0.25}}
                            className="flex">
                              <AiFillGithub/>
                        </motion.div>
                      </a>
                  </motion.div>
              </div>
              <div className='app__work-content'>
                <h4 className='bold_text'>{work.title}</h4>
                <p className='p-text' style={{marginTop:10}}>{work.description}</p>

              <div className="tags-section">
                {work.tags.map((tag,index)=>(
                    <div className='app__work-tag' key={tag+ index}><p>#{tag} </p></div>
                  ))}
              </div>
               
              </div>
            </div>

          ))}
      </motion.div>


    </>
  )
}

export default AppWrap(Work,'Work')