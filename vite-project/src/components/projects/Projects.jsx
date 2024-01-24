import {useRef} from 'react'
import "./projects.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
const items = [
    {
        id:1,
        title:'dupa1',
        img:'https://tappy.pl/wp-content/uploads/2021/02/AdobeStock_42261016.jpeg',
        desc:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit optio illum, impedit consequatur tempora vero laudantium porro placeat molestias maxime quod explicabo non incidunt, ipsam eum libero. Voluptatibus, accusamus mollitia.'
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

const Single = ({item}) => {
    const ref = useRef();
    const {scrollYProgress} = useScroll({ target: ref});
    const y = useTransform(scrollYProgress, [0,1], [-350,350]);
    return (
        <section>
            <div className='container'>
                <div className="wrapper">
                    <div className='imageContainer' ref={ref}>
                <img src={item.img} alt='' /></div>
                <motion.div className="textContainer" style={{y}} >
                    <h2 >{item.title}</h2>
                    <p>{item.desc}</p>
                    <button>Demo</button>
                </motion.div>
                </div>
           </div> 
           </section>
    )
    }
const Projects = () => {

    const ref = useRef()

    const {scrollYProgress} = useScroll({ target: ref, offset: ["end end", "start start"],})
    const scaleX = useSpring(scrollYProgress, {
        stiffnes: 100,
        damping:30,
    })

  return (
    <div className='projects'>
        <div className='progress'>
            <h1>My Projects</h1>
            <motion.div style={{scaleX:scaleX}} className='progressBar'></motion.div>
        </div>
        {items.map(item=>
        (<Single item={item} key={item.id}/>
        ))}
    </div>
    
  )
}

export default Projects