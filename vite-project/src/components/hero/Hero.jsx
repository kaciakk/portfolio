import React from 'react'
import "./hero.scss"
import { motion } from "framer-motion"

const textVariants = {
    initial: {
        x:-500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration:1,
            staggerChildren: 0.1,
        },
    },
    scrollButton:{
        opacity: 0,
        y:18,
        transition: {
            duration: 2,
            repeat:Infinity
    }
},
};


export const Hero = () => {
  return (
    <div className='hero'>
        
        <div className='wrapper'>
            
        <motion.div className='textContainer' variants={textVariants} initial='initial' animate='animate'>
         <motion.h2 variants={textVariants}>Maciej Włosek</motion.h2>
         <motion.h1 variants={textVariants}>Web developer</motion.h1>
         <motion.div className='buttons'>
            <motion.button variants={textVariants}>Contact Me</motion.button>
            <motion.button variants={textVariants}>CV</motion.button>
         </motion.div>
        </motion.div>
        <div className='arrowContainer'> <motion.img variants={textVariants} animate='scrollButton' src='/arrow-down.png' alt='' /></div>
        <div className='imageContainer'>
         <img src='/hero-me.png' alt='' />
         
        </div>
        

        </div>
       
    </div>
  )
}
