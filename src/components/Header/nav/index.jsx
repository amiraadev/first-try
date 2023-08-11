import React, { useState } from 'react'
import './style.css';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from '../animation';
import Link from './Link';
import Curve from './Curve';
import Footer from './Footer';

const navItems = [
  {
    title: "Home",
    href: "allaguiamira/",
  },
  {
    title: "About",
    href: "allaguiamira/About",
  },
  // {
  //   title: "Work",
  //   href: "/Work",
  // },
  {
    title: "Contact",
    href: "allaguiamira//Email",
  },
]

export default function index() {

  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div 
      variants={menuSlide} 
      initial="initial" 
      animate="enter" 
      exit="exit" 
      className="menu"
      >
       <div className="body">
            <div onMouseLeave={() => {setSelectedIndicator(pathname)}} className="nav">
                    <div className="header">
                        <p>Navigation</p>
                    </div>
                    {
                      navItems.map( (data, index) => {
                        return <Link 
                        key={index} 
                        data={{...data, index}} 
                        isActive={selectedIndicator == data.href} 
                        setSelectedIndicator={setSelectedIndicator}>
                        </Link>
                      })
                    }
            </div>
            <Footer />
        </div>
        <Curve />
    </motion.div>
  )
}