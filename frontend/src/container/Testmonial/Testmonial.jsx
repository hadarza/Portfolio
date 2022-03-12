import React,{useState,useEffect} from 'react'
import {motion} from 'framer-motion'
import { HiChevronLeft,HiChevronRight } from 'react-icons/hi'

import { AppWrap , MotionWrap } from '../../wrapper'
import { urlFor , client } from '../../client'

const Testmonial = () => {
  const [brands, setBrands] = useState([])
  const [testmonials, setTestmonials] = useState([])
  const [currentIndex, setcurrentIndex] = useState(0)


  
  const handleClick= (index) =>{
    console.log(test)
    setcurrentIndex(index);
  }

  useEffect(() => {
    const query = '*[_type == "testimonials"]'
    

    client.fetch(query)
      .then((data)=>{
        setTestmonials(data);
      })

  }, [])
  const test = testmonials[currentIndex];
  return (
    <>
    <h1 className="h1-title"> Testmonials</h1>
    <div id="line"></div>

    {testmonials.length && (
      <>
      <div className='app__testmonial-item'>
        <img src={urlFor(test.imgurl)} alt={test.name}/>
        <div className='app__testmonial-content'>
          <p className='bold-text feedback'>{test.feedback}</p>
          <div>
            <h4 className='bold-text'>{test.name}</h4>
            <h5 className='p-text'>{test.company}</h5>
          </div>
        </div>
      </div>

      <div className="app__testmonial-btns">
        <div className='flex' onClick={()=>{handleClick(currentIndex === 0 ? testmonials.length -1 : currentIndex -1)}}>
          <HiChevronLeft/>  
        </div>  
        <div className='flex' onClick={()=>{handleClick(currentIndex === testmonials.length - 1  ? 0 : currentIndex + 1)}}>
          <HiChevronRight/>  
        </div>
      </div>
      </>
    )}
    </>
  )
}

export default AppWrap(MotionWrap(Testmonial,'app__testmonials'),'Testmonials')