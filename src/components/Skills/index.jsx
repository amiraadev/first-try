import  './style.css';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
// import { slideUp, opacity } from './animation';
import { FaCode ,FaServer,FaDatabase,FaInfinity } from 'react-icons/fa';

import Rounded from '../../common/RoundedButton';
import Image from 'next/image';
export default function index() {

    const description = useRef(null);

    return (
        <div  ref={description} className="skill-description">
            
        <div className=' h-full w-full '>
        <div className="flex flex-col md:gap-14 p-5 md:p-20">
           <h1 className=' text-left md:text-6xl md:pr-14'>Fostering digital excellence: Nurturing growth in the digital realm</h1>
           <hr className=" border-t-1 border-gray-700 my-4 "/>
             <div  className="w-full flex  flex-wrap md:flex-row md:flex-nowrap md:gap-10 md:p-20"> 
                <div  className="flex-1 md:p-16"> 
                With each project, I push my work to new horizons, always putting quality first.
                As a software engineer, I'm committed to constant growth and delivering excellence to drive impactful outcomes.
                </div>
                <div  className="flex"> 
                    <Image 
                        src="/images/background.jpg"
                        width={"800"}
                        height={"600"}
                        // fill={true}
                        alt="background"
                    />
                </div>
             </div>
           <h1 className='title md:mt-24'>I can help you with ...</h1>
            <div  className="w-full flex  flex-wrap md:flex-row md:flex-nowrap md:gap-10"> 
            {/* frontend */}
                 <div  className="md:w-1/4 sm:1/2 p-4">
                    <FaCode className="icon"/>
                    <hr className=" border-t-2 border-gray-500 my-4 "/>
                    <h2 className='text-4xl text-left my-4 '>Frontend </h2>
                    <div className="text-box " >
                           <p>I build scalable websites from scratch that fit seamlessly with design.</p>
                           <p>My expertise lies in creating captivating micro animations, smooth transitions, and engaging interactions that bring websites to life.</p>
                    </div>
                 </div> 
            {/* Backend */}
                 <div  className="md:w-1/4 sm:1/2 p-4">
                    <FaServer className="icon"/> 
                    <hr className=" border-t-2 border-gray-500 my-4 "/>
                    <h2 className='text-4xl text-left my-4 '>Backend </h2>
                    <div className="text-box ">
                           <p>Whether it&apos;s building RESTful services, integrating third-party APIs, or optimizing server response times, my focus remains on delivering a seamless user experience through my backend craftsmanship.</p>
                    </div>
                 </div> 
            {/* Database */}
                 <div  className="md:w-1/4 sm:1/2 p-4">
                    <FaDatabase className="icon"/>
                    <hr className=" border-t-2 border-gray-500 my-4 "/>
                    <h2 className='text-4xl text-left my-4 '>Database </h2>
                    <div className="text-box ">
                           <p>I meticulously organize data models to enhance data integrity and facilitate data retrieval, ensuring optimal performance even with large datasets.</p>
                    </div>
                 </div> 
            {/* DevOps */}
                 <div  className="md:w-1/4 sm:1/2 p-4">
                    <FaInfinity className="icon"/>
                    <hr className=" border-t-2 border-gray-500 my-4 "/>
                    <h2 className='text-4xl text-left my-4 '>DevOps </h2>
                    <div className="text-box ">
                      <p>As a DevOps practitioner, I focus on automating and integrating various stages of the development lifecycle, from continuous integration (CI) to continuous delivery (CD).</p>       
                    </div>
                 </div>
            </div>
        </div>
    </div>
        </div>
    )
}
