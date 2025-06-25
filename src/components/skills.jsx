import Carousel from 'react-bootstrap/Carousel';
import React from 'react'
import Card from './card';
import { useRef } from 'react';
import useScrollSnap from "react-use-scroll-snap";

function Skills() {
    const scrollRef = useRef(null);
    useScrollSnap({ ref: scrollRef, duration: 50, delay: 20 });
    const linkList = ['/images/skills-logo/html.png','/images/skills-logo/CSS.png','/images/skills-logo/js.png','/images/skills-logo/node.png','/images/skills-logo/pg.png','/images/skills-logo/react1.png']
    const linkList2 = ['/images/skills-logo/github.png','/images/skills-logo/matlab.png','/images/skills-logo/sim.png','/images/skills-logo/keil.png']
    const linkList3 = ['/images/skills-logo/c.png','/images/skills-logo/cpp.png','/images/skills-logo/py.png','/images/skills-logo/java.png']
  return (
    <div id="skills" >
        <h1 className='skills-title' >SKILLS</h1>
        <p className='skills-sub' >My Tech Stack</p>
        <Carousel>
        <Carousel.Item interval={3000}>
            <div className="c-plate">
                <Card cardTitle="WebDev" imgLinks={linkList}/>
            </div>
        </Carousel.Item>

        <Carousel.Item interval={3000}>
            <div className="c-plate">
                <Card cardTitle="Languages" imgLinks={linkList3} />
            </div>
        </Carousel.Item>

        <Carousel.Item interval={3000}>
            <div className="c-plate">
                <Card cardTitle="Platforms" imgLinks={linkList2} />
            </div>
        </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default Skills;