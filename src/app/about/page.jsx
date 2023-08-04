"use client"
import React from 'react'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import PreAbout from '../../components/PreAbout';
import Skills from '../../components/Skills';

function page() {
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
          }, 2000)
      }
    )()
  }, [])

  return (
    <main >
        <AnimatePresence mode='wait'>
          {isLoading && <PreAbout />}
        </AnimatePresence>
        <Skills />
    
    </main>
  )
}

export default page
