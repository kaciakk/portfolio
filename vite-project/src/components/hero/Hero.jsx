import React, {useRef} from 'react'
import "./hero.scss"
import { motion } from "framer-motion"


export const Hero = () => {
  const handleCVDownload = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = '/resume.pdf';
    downloadLink.download = 'resume.pdf';
    downloadLink.click();
  };

const text1 = "HI!".split(" ");
const text2 = "     I am Maciej".split(" ");
const text3 = "            Student of computer science at the Cracow University of Technology.".split(" ");
const text4 = "                       I try to learn new things and implement them into my projects.".split(" ");
const text5 = "                                    Currently looking for my first job where I can gain new experience.".split(" ");

  return (
    <div className='hero-container'>
        <div className='hero-wrapper'>
        <div className='imageContainer'>
     <motion.img  src='/hero-me.png'  alt=''  animate={{  x: [-2, 2, -2], y: [2, -2, 2], 
    }} 
    transition={{
      duration: 5, 
      repeat: Infinity, 
      ease: "linear", 
    }}
  />
</div>
            <div className='textContainer' >
        {text1.map((el, i) => (
         <motion.h1 initial = {{opacity:0}} animate={{opacity:1}} transition={{duration: 0.25, delay: i/10}}  key={i} > {el}{" "}
         </motion.h1>))}
         <h3>
         {text2.map((el, i) => (
         <motion.span initial = {{opacity:0}} animate={{opacity:1}} transition={{duration: 0.25, delay: i/10}}  key={i} > {el}{" "}
         </motion.span>))}</h3>
        <h3>
         {text3.map((el, i) => (
         <motion.span initial = {{opacity:0}} animate={{opacity:1}} transition={{duration: 0.25, delay: i/10}}  key={i} > {el}{" "}
         </motion.span>))}</h3>
         <h3>
         {text4.map((el, i) => (
         <motion.span initial = {{opacity:0}} animate={{opacity:1}} transition={{duration: 0.25, delay: i/10}}  key={i} > {el}{" "}
         </motion.span>))}</h3>
         <h3>
         {text5.map((el, i) => (
         <motion.span initial = {{opacity:0}} animate={{opacity:1}} transition={{duration: 0.25, delay: i/10}}  key={i} > {el}{" "}
         </motion.span>))}</h3>
         <div className='buttons'>
 
            <motion.button whileHover={{scale:1.2}} whileTap={{scale:0.9}} onClick={handleCVDownload}>CV</motion.button>
     
            </div>
            
            <div className='arrowContainer'>
            <motion.img  src='/arrow-down.png'  alt='' animate={{ y: [-20, 20, -20], opacity: [1, 0, 1]
    }} 
        transition={{
        duration: 2, 
        repeat: Infinity, 
    
     
      }}
  />
                
            </div>
         </div>
        </div>  
    </div>
  )
}
