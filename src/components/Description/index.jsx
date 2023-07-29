import  './style.css';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';
import Rounded from '../../common/RoundedButton';
export default function index() {

    const phrase = "With a robust background as a former software engineer in the military, I bring a wealth of technical expertise, disciplined work ethic, and a proven track record of delivering mission-critical solutions. From front-end development to seamless back-end integration, my dedication lies in crafting secure and indispensable applications tailored to meet specific and vital requirements.";
    const description = useRef(null);
    const isInView = useInView(description)
    return (
        <div ref={description} className="description">
            <div className="body">
    
                <p>
                {
                    phrase.split(" ").map( (word, index) => {
                        return <span className="mask"><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                    })
                }
                </p>
                <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>The combination of my passion for design, code & interaction positions me in a unique place in the web design world.</motion.p>
                <div data-scroll data-scroll-speed={0.1}>
                    <Rounded className="button">
                        <p>About me</p>
                    </Rounded>
                </div>
            </div>
        </div>
    )
}
