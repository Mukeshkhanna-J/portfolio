import React, { useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Slide from '@mui/material/Slide';

function Contact() {
    const [isHovered,setHover]=useState(false);
    const updateHover=()=>{
        setHover(prevSt=>{
          return !prevSt
        });}
    return ( 
    <div id="contact-me">
        <div className="container contact-card" onMouseEnter={updateHover} onMouseLeave={updateHover} >
            <div className='contact-body'>
                <h1>CONTACT</h1>
                <h3>Get in Touch</h3>
            </div>
            
            <div className="contact-icons">
                <Slide in={isHovered} direction='up'color="action"  timeout={500}><div><a href='https://github.com/Mukeshkhanna-J' target='_blank' rel="noopener noreferrer"><GitHubIcon /></a></div></Slide>
                <Slide in={isHovered} direction='up'color="action"  timeout={750}><a href="mailto:mukeshkhanna.j2023@vitstudent.ac.in" target='_blank' rel="noopener noreferrer"><EmailIcon /></a></Slide>
                <Slide in={isHovered} direction='up'color="action"  timeout={1000}><a href='https://www.linkedin.com/in/mukeshkhanna-j-76b169290' target='_blank' rel="noopener noreferrer"><LinkedInIcon /></a></Slide>
            </div>
        </div>
    </div>
     );
}

export default Contact;