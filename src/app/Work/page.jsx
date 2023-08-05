'use client';
import { useEffect, useRef, useState } from 'react';
import './style.css'
import Image from 'next/image';
import Lenis from '@studio-freight/lenis'
import { useTransform, useScroll, motion } from 'framer-motion';

const images = [
  "_ (1).jpeg",
  "_.jpeg",
  "℗Miradas Prominentes _ FW23.png",
  "Aimé Leon Dore - Website.jpeg",
  "De mi autoría, si te inspiras da créditos_ @evildeserve.jpeg",
  "eiginleiki.jpeg",
  "eiginleiki.png",
  "Fintoil - A Drop of Future.png",
  "Jimmy - SAVEE.png",
  "Some Design 01_.jpeg",
  "studio de Ronners - typo_graphic posters.png",
  "Tumblr.png"
]

export default function Home() {
  
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({width:0, height:0});

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start']
  })
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])

  useEffect( () => {
    const lenis = new Lenis()

    const raf = (time) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const resize = () => {
      setDimension({width: window.innerWidth, height: window.innerHeight})
    }

    window.addEventListener("resize", resize)
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    }
  }, [])

  return (
    <main className="main">
      <div className="spacer"></div>
      <div ref={gallery} className="gallery">
        <div className="galleryWrapper">
          <Column images={[images[0], images[1], images[2]]} y={y}/>
          <Column images={[images[3], images[4], images[5]]} y={y2}/>
          <Column images={[images[6], images[7], images[8]]} y={y3}/>
          <Column images={[images[9], images[10], images[11]]} y={y4}/>
        </div>
      </div>
      <div className="spacer"></div>
    </main>
  )
}

const Column = ({images, y}) => {
  return (
    <motion.div 
      className="column"
      style={{y}}
      >
      {
        images.map( (src, i) => {
          return <div key={i} className="imageContainer">
            <Image 
              src={`/images/${src}`}
              alt='image'
              fill
            />
          </div>
        })
      }
    </motion.div>
  )
}