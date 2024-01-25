import React from 'react'
import "./navbar.scss"
import { motion} from "framer-motion";
export const Navbar = () => {
  return (
    <div className='navbar'>
     <div className='wrapper'>
        <span><a href='#'><motion.img src="/logo.png" alt=""  whileHover={{scale:1.3}} whileTap={{scale:0.8}}/></a></span>
        <div className='social'>
            <a href='https://www.linkedin.com/in/maciej-w%C5%82osek/' target='_blank'><motion.img src="/linkedin-sign.png" alt="" whileHover={{scale:1.3}} /></a>
            <a href='https://github.com/kaciakk' target='_blank'><motion.img src="/github-sign.png" alt=""  whileHover={{scale:1.3}} whileTap={{scale:0.8}} /></a>
        </div>
        </div></div>
  )
}
