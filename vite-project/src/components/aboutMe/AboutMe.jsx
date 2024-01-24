import React from 'react'
import "./aboutMe.scss";
import {motion} from "framer-motion"
const AboutMe = () => {

    const variants = {
        inital:{
            opacity:0,
            y:10,
        },
        animate:{
            opacity:1,
            y:0,
        },
    };

  return (
    <div className='container'>
        <h2>About me</h2>
        <div className="wrapper" >
            <motion.span variants={variants} initial="inital" whileInView={"animate"}>I am a student of computer science in the last year of part-time studies at the Cracow University of Technology. I have a basic knowledge of programming and information technology. This knowledge is enhanced by three years of experience as a robotic automation technician, which has allowed me to work with a wide range of people of different backgrounds and ages. As a result, I understand the benefits of working in a close-knit team, how it accelerates the learning process, and the effect it has on project execution. Flexibility in changing working conditions and adapting to changing project needs come naturally to me. I believe that asking a lot of questions is not a bad thing, and I look forward to this opportunity in my new job. I would also like to note my interests, which include not only the world of computer technology but also the current political situation and technological innovations in both computers and cars. In addition, my passion is DIY, which allows me to develop practical skills and a creative approach to problem-solving.

            </motion.span>
        </div>
    </div>
  )
}

export default AboutMe