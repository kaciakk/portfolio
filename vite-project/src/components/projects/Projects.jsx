import {useRef} from 'react'
import "./projects.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
const items = [
    {
        id:1,
        title:'Cavcmr Rejnaxca',
        img:'https://i.ibb.co/Tq8Dk8j/carciak.png',
        desc:'A car rental website based on the MERN technology stack. Work in progress...',
        site:'https://kaciak-tic-tac-toe.netlify.app'
    },
    {
        id:2,
       title:'EverMemads',
       img:'https://i.ibb.co/q0BtppW/memo.png',
       desc:'One of my initial projects was a note-taking web application developed using React and TypeScript.'
       },
    {
        id:3,
        title:'Tic Tac Toe',
        img:'https://i.ibb.co/v4XY8R4/tick-tack-toe.png',
        desc:'One of the projects I worked on while learning JavaScript, HTML, and CSS was a Tic Tak Toe game.',
        site:'https://kaciak-tic-tac-toe.netlify.app'
        },
     {
         id:4,
        title:'R-P-S',
        img:'https://i.ibb.co/CVP9j7k/roc-paper-scissors.png',
        desc:'One of the projects I worked on while learning JavaScript, HTML, and CSS was a Rock Paper Scissors game.',
        site:'https://kaciak-rock-paper-scissors.netlify.app'
        },
        {
            id:5,
           title:'Snake',
           img:'https://i.ibb.co/xXrdrcs/snake1.png',
           desc:'One of the projects I worked on while learning JavaScript, HTML, and CSS was a Snake game.',
           site:'https://kaciak-snake.netlify.app'
           },
          
           {
            id:6,
           title:'Hangman',
           img:'https://i.ibb.co/q7jmY0v/hangman.png',
           desc:'One of my initial projects was a note-taking web application developed using React and TypeScript.',
           site:'https://kaciak-hangman.netlify.app'
           },
];


const Single = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
      target: ref,
    });
  
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
    return (
        <section>
            <div className='container'>
                <div className="wrapper">
                <div className="imageContainer" ref={ref}>
                <img src={item.img} alt='' /></div>
                <motion.div className="textContainer" style={{y}} >
                    <h2 >{item.title}</h2>
                    <p>{item.desc}</p>
                    <a href={item.site} target="_blank" rel="noopener noreferrer">
                    <motion.button whileHover={{scale:1.1}} whileTap={{scale:0.9}}>Demo</motion.button>
                    </a>
                </motion.div>
                </div>
           </div> 
           </section>
    );
    };
const Projects = () => {

    const ref = useRef()

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
      });
   const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className='projects' ref={ref}>
        <div className='progress'>
            <h1>My Projects</h1>
            <motion.div style={{scaleX}} className='progressBar'></motion.div>
        </div>
        {items.map(item=>
        (<Single item={item} key={item.id}/>
        ))}
    </div>
    
  )
}

export default Projects