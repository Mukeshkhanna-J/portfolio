import React from 'react'
import { useRef } from 'react';
import CardsList from './cards_list';
import useScrollSnap from 'react-use-scroll-snap';


function Work() {
    const scrollsnap = useRef(null);
    useScrollSnap({duration:50,delay:20,ref:scrollsnap});
    return ( 
        <div id="work" ref={scrollsnap} >
            <h1 className='skills-title' >WORK</h1>
            <p className='skills-sub' >My Projects</p>
            <CardsList />
        </div>
     );
}

export default Work;