import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import  './style.css';
import Image from 'next/image';

const slider1 = [
    {
        color: "#4d5055",
        src: "c2.jpg",
        link:"https://amirticha.github.io/gym-app/"
    },
    {
        color: "#4d5055",
        src: "decimal.jpg",
        link:"https://amirticha.github.io/gym-app/"
    },
    {
        color: "#4d5055",
        src: "funny.jpg",
        link:"https://amirticha.github.io/gym-app/"
    },
    {
        color: "#4d5055",
        src: "google.jpg",
        link:"https://amirticha.github.io/gym-app/"
    }
]

const slider2 = [
    {
        color: "#4d5055",
        src: "maven.jpg",
        link:"https://amirticha.github.io/gym-app/"
    },
    {
        color: "#4d5055",
        src: "panda.jpg",
        link:"https://amirticha.github.io/gym-app/"
    },
    {
        color: "#4d5055",
        src: "powell.jpg",
        link:"https://amirticha.github.io/gym-app/"
    },
    {
        color: "#4d5055",
        src: "wix.jpg",
        link:"https://amirticha.github.io/gym-app/"
    }
]

export default function index() {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    })

    const x1 = useTransform(scrollYProgress, [0, 1], [0, 150])
    const x2 = useTransform(scrollYProgress, [0, 1], [0, -150])
    const height = useTransform(scrollYProgress, [0, 0.9], [50, 0])

    

    return (
        <div ref={container} className="slidingImages">
            <motion.div style={{x: x1}} className="slider">
                    {
                        slider1.map( (project, index) => {
                            const handleClick = () => {
                                window.location.href = project.link;
                              };
                            return <div className="project" style={{backgroundColor: project.color}} >
                                <div key={index} className="imageContainer">
                                    <Image 
                                    fill={true}
                                    alt={"image"}
                                    src={`/images/${project.src}`}
                                    onClick={handleClick}/>
                                </div>
                            </div>
                        })
                    }
                </motion.div>
                <motion.div style={{x: x2}} className="slider">
                    {
                        slider2.map( (project, index) => {
                            const handleClick = () => {
                                window.location.href = project.link;
                              };
                            return <div className="project" style={{backgroundColor: project.color}} >
                                <div key={index} className="imageContainer">
                                    <Image 
                                    fill={true}
                                    alt={"image"}
                                    src={`/images/${project.src}`}
                                    onClick={handleClick}/>
                                    
                                </div>
                            </div>
                        })
                    }
                </motion.div>
                <motion.div style={{height}} className="circleContainer">
                    <div className="circle"></div>
                </motion.div>
        </div>
    )
}