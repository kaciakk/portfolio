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
        
    <form ref={formRef} onSubmit={sendEmail}>
            <input type='text' required placeholder='Email' name='email'></input>
            <textarea rows={8} placeholder='Message' name='message'/>
            <button>Submit</button>
            {error && "Error"}
            {success && "Success"}
        </form>
    </div>
    </motion.div>
  )
}

export default Contact