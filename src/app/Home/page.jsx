'use client';
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import PrePage from '../../components/PrePage';
 import Landing from '../../components/Landing';
 import Projects from '../../components/Projects';
 import Description from '../../components/Description';
 import SlidingImages from '../../components/SlidingImages';
import Contact from '../../components/Contact';

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();

          setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 500)
      }
    )()
  }, [])

  return (
    // <main className={styles.main}>
    <main >
        <AnimatePresence mode='wait'>
        {isLoading && <PrePage page="Home" />}
         </AnimatePresence>
        <Landing />
        <Description />
        <Projects />
        <SlidingImages />
        <Contact />  
    </main>
  )
}
