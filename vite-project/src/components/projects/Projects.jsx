import {useRef} from 'react'
import "./projects.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
const items = [
    {
        id:1,
        title:'Car Rental',
        img:'/carciak.png',
        desc:'A car rental website based on the MERN technology stack, which includes a React.js-based frontend, a Node.js-based backend with the Express.js framework, and a MongoDB database.'
    },
    {
        id:2,
        title:'dupa2',
        img:'https://tappy.pl/wp-content/uploads/2021/02/AdobeStock_42261016.jpeg',
        desc:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit optio illum, impedit consequatur tempora vero laudantium porro placeat molestias maxime quod explicabo non incidunt, ipsam eum libero. Voluptatibus, accusamus mollitia.'
        },
     {
         id:3,
        title:'dupa3',
        img:'https://tappy.pl/wp-content/uploads/2021/02/AdobeStock_42261016.jpeg',
        desc:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit optio illum, impedit consequatur tempora vero laudantium porro placeat molestias maxime quod explicabo non incidunt, ipsam eum libero. Voluptatibus, accusamus mollitia.'
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
                    <motion.button whileHover={{scale:1.3}} whileTap={{scale:0.8}}>Demo</motion.button>
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