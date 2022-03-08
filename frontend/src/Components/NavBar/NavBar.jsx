import React, { useState } from 'react'
import {HiMenuAlt4,HiX} from 'react-icons/hi'
import {motion} from 'framer-motion'
import {images} from '../../constants'

const NavBar = () => {

    const[toggle, setToggle] = useState(false)
  return (
    <nav className="app_navbar">
        <div className="app_navbar_logo">
            <img src={images.logo} alt="logo"/>
        </div>
            <ul className="app_navbar_links">
                {['Home','About','Work','Skills','Contact'].map((item)=>(
                    <li className="p-text flex" key={`link-${item}`}>
                        <div/>
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>

            <div className="app_navbar_menu">
                <HiMenuAlt4 className="icon-open" onClick={()=>setToggle(true)}/>
                {toggle && (
                    <motion.div 
                    whileInView={{x:[300,0]}}
                    transition={{duration:0.85,ease:'easeOut'}}>
                        <HiX onClick={()=>setToggle(false)}/>
                        <ul className="app_navbar_links">
                            {['Home','About','Work','Skills','Contact'].map((item)=>(
                                <li className="p-text flex" key={item}>
                                    <a href={`#${item}`} onClick={()=>{setToggle(false)}}>{item}</a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </div>
    </nav>
  )
}

export default NavBar