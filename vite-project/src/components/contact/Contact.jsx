import { useRef, useState } from 'react'
import { motion} from "framer-motion";
import emailjs from '@emailjs/browser';
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
    const formRef = useRef();
    const[error, setError] = useState(false)
    const[success, setSuccess] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_dk3czgt', 'template_2dxnpti', formRef.current, 'R1AnR19wYCsFvTnvL')
          .then((result) => {
              setSuccess(true)
          }, (error) => {
            setError(true)
          });
      };

  return (
    <motion.div className='contact'>
    <div className="textContainer">
        <h1>Contact me!</h1>
        <div className="item">
            <h2>Mail</h2>
            <span>wlomcj@gmail.com</span>
        </div>
        <div className="item">
            <h2>Adres</h2>
            <span>32-300 Olkusz, małopolska</span>
        </div>
        <div className="item">
            <h2>Phone</h2>
            <span>+48 737-770-872</span>
        </div>
        
    </div>
    <div className="formContainer">
        
    <form ref={formRef} onSubmit={sendEmail}>
            <input type='text' required placeholder='Email' name='email'></input>
            <textarea rows={8} placeholder='Message' name='message'/>
            <motion.button whileHover={{scale:1.3}} whileTap={{scale:0.8}}>Submit</motion.button>
            {error && "Error"}
            {success && "Success"}
        </form>
    </div>
    </motion.div>
  )
}

export default Contact