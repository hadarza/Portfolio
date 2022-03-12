import React,{useState,useEffect} from 'react'
import { motion } from 'framer-motion'
import { AppWrap , MotionWrap } from '../../wrapper'
import { urlFor , client } from '../../client'

const Skills = () => {
  const [skills, setskills] = useState([])
  const [experiences, setexperiences] = useState([])
  useEffect(() => {
    const query = '*[_type == "experiences"]'
    const skillsQuery = '*[_type == "skills"]'

    client.fetch(query)
      .then((data)=>{
        setexperiences(data);
        console.log("here "+ experiences)
      })

      client.fetch(skillsQuery)
      .then((data)=>{
        setskills(data);
      })

  }, [])

  return (
    <>
      <h1 className="h1-title"> Skills & Experience</h1>
      <div id="line"></div>

      <div className="app__skills-container">
        <motion.div className='app__skills-list'>
          {skills?.map((skill)=>(
            <motion.div
            whileInView={{opacity:[0,1]}}
            transition={{duration:0.5}}
            className="App__skills-item"
            key={skill.name}
            >
              <div className='flex' style={{backgroundColor:skill.bgColor}}>
                <img src={urlFor(skill.icon)} alt={skill.name}/>
              </div>
              <p className='p-text'>{skill.name}</p>

            </motion.div>
          ))}
        </motion.div>

        <motion.div className='app__work-list'>
          {experiences.map((experience)=>(
            <motion.div
            className="app__skills-exp-item"
            key={experience.startYear}
            >
              <div className='app__skills-exp-year'>
                <p className='bold-text'>{experience.startYear} - {experience.endYear}</p>
              </div>
              {/*<div className='circle'></div>*/}

              <motion.div className='app__skills-exp-works'>
                {experience?.works?.map((work,index)=>(
                  <>
                  <motion.div
                   whileInView={{opacity:[0,1]}}
                   transition={{duration:0.5}}
                   className="App__skills-exp-work"
                   key={work.name + index}
                  >
                    <h4 className='bold-text workName'>{work.name}</h4>
                    <p className='p-text'>{work.company} {work.desc}</p>
                  </motion.div>
                  </>
                ))}
                </motion.div>
              
            </motion.div>
          ))}
          
        </motion.div>
      </div>
    </>
  )
}

export default AppWrap(MotionWrap(Skills,'app__skills'),'Skills')