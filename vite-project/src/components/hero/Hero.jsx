import React from 'react'
import "./hero.scss"



export const Hero = () => {
  return (
    <div className='hero-container'>
        
        <div className='hero-wrapper'>
        <div className='imageContainer'>
         <img src='/hero-me.png' alt='' />
        </div>
            <div className='textContainer'>
         <h1>HI!</h1>
         <h2>I am Maciej</h2>
         <h3>Student of computer science at the Cracow University of Technology.</h3>
         <h3>I try to learn new things and implement them into my projects</h3>
         <h3>Currently looking for my first job where I can gain new experience.</h3>
         <div className='buttons'>
            <button>Contact Me</button>
            <button>CV</button>
            </div>
         </div>
         
        
       
        

        </div>  
        
    </div>
  )
}
