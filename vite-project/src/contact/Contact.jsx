import React from 'react'
import { motion} from "framer-motion";
import "./contact.scss";
const variants = {
    inital:{
        y:500,
        opacity:0
    },
     animate: {
        y: 0,
        opacity:1,
        transmiton:{
            duration: 0.5,
            staggerChildren: 0.1,
        },
    },
}




const Contact = () => {
  return (
    <motion.div className='contact'>
    <div className="textContainer">
        <h1>HI ITS ME</h1>
        <div className="item">
            <h2>Mail</h2>
            <span>Email</span>
        </div>
        <div className="item">
            <h2>Adres</h2>
            <span>Adres</span>
        </div>
        <div className="item">
            <h2>Phone</h2>
            <span>Phone</span>
        </div>
        
    </div>
    <div className="formContainer">
        <form>
            <input type='text' required placeholder='Email'></input>
            <textarea rows={8} placeholder='Message'/>
            <button>Submit</button>
        </form>
    </div>
    </motion.div>
  )
}

export default Contact