import React from 'react'
import Fade from '@mui/material/Fade';
import Slide from '@mui/material/Slide';
import { quantum } from 'ldrs'
import {useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';

quantum.register()

function TitlePage() {
    const [mousex,setx]= useState(0);
    const [mousey,sety]= useState(0);
    return ( 
        <div className='title-page'>
            <div className="container">
                <img src="" className="title-background-image"/>
                <div className="title-text">
                    <Slide direction="right" in={true} timeout={500}><div><h1 className="name">HI</h1></div></Slide>
                    <Slide direction="right" in={true} timeout={1000}><div><h1 className="name">I'M</h1></div></Slide>
                    <Fade in={true} timeout={4500}><div><h1 className="name"><span className="mukeshkhanna text-sm">MUKESHKHANNA</span><l-quantum size="75" speed="3.75" color="#8CABFF" ></l-quantum></h1></div></Fade>
                    {/* <h1 className="name">HI<br/>I'M <Fade in={true} timeout={1500} ><span className="mukeshkhanna text-sm">MUKESHKHANNA</span></Fade></h1> */}
                    
                </div>   
                <div className="occ">
                    <h3 className='typewriter'>
                    <Typewriter
                        options={{
                            strings: ['Electronics student', 'Web developer', 'Cybersecurity enthusiast'],
                            autoStart: true,
                            loop: true,
                            delay:50,
                            deleteSpeed:30
                        }}
                    />
                    </h3>
                </div>          
            </div>
        </div>
     );
}

export default TitlePage;