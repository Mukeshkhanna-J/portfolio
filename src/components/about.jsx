import React, { useState } from 'react';
import "../style.css"
import Fade from '@mui/material/Fade';
import DownloadingIcon from '@mui/icons-material/Downloading';
import { useScroll,useMotionValueEvent} from "framer-motion"
import { useRef } from 'react';
import useScrollSnap from "react-use-scroll-snap";

function About() {
  const scrollRef = useRef(null);
    useScrollSnap({ ref: scrollRef, duration: 50, delay: 20 });

  const [isHovered,setHover]=useState(false);
  const [isHoveredT,setHoverT]=useState(true);
  const [isScroll,setScroll]=useState(null);
  const { scrollY } = useScroll()
  
  
  const updateHover=()=>{
    setHover(prevSt=>{
      return !prevSt
    });
    if (isHoveredT===true) {
      setHoverT(false);
    } else {
      setHoverT(true);
    }
  }
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScroll(latest);
  })

    return ( 
      <div id="about-me" >
        <Fade in={isScroll>450?true:false} timeout={1500}>
          <div>
            <h1 className='skills-title' >MY JOURNEY</h1>
            <p className='skills-sub' >A little bit of Myself</p>
          </div>
        </Fade>
        <div className="about-card2" onMouseEnter={updateHover} onMouseLeave={updateHover} >
          <Fade in={isHoveredT} timeout={1500}><h1><span className='about-title'>About</span></h1></Fade>
          <Fade in={isHovered} timeout={1300} >
            <div>
              <Fade in={isHovered} timeout={100}>
                <p>
                  Hey !   I’m <b>Mukeshkhanna</b> an engineering student at VIT Chennai who enjoys building things — whether it’s a project on electronics, a cybersecurity stuff, or a responsive website. I spend most of my time exploring and always trying to learn something new (or fix what I just broke).<br/><br/>

                  Outside of tech, I’m passionate about staying active — lifting weights and reading books. I like keeping things simple, solving real problems, and occasionally capturing flags in CTFs for fun (and learning).<br/><br/><span className='end'>Driven by Curiosity.</span>

                  <a href="/CV.pdf" download="mukeshkhanna_CV">Resume  <DownloadingIcon/></a>
                </p>
              </Fade>
              <div className='img-div'><img src='/images/me2.jpg' alt="That's me" /></div>
            </div>
          </Fade>
        </div>
      </div>
     );
}

export default About;