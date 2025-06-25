import React, { useState } from 'react';
import { useRef } from 'react';
import Card from './card';
import CardDetails from './card_details';
import Slide from '@mui/material/Slide';
import { useInView } from 'framer-motion';
import useScrollSnap from "react-use-scroll-snap";


function CardsList() {
    const titleList=["title1","title2","title3"]
    const contentList=["content1","content2","content3"]
    const srcs = ['https://th.bing.com/th?id=OIP.LskQ7SN-4_O66dXJFJr-yQHaDz&w=348&h=179&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2','https://th.bing.com/th?id=OIP.T73uN4l4imR9axq9ZCiO6QHaGJ&w=274&h=227&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2','https://th.bing.com/th?id=OIP.68DAlBGpuNImbroUlpltxwHaF_&w=277&h=225&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2']

    const ref1= useRef(null);
    const ref2= useRef(null);
    const ref3= useRef(null);

    const isInView1=useInView(ref1);  
    const isInView2=useInView(ref2);  
    const isInView3=useInView(ref3);  

    const scrollRef = useRef(null);
    useScrollSnap({ ref: scrollRef, duration: 50, delay: 20 });

    return ( 
        <section className='work-section'>
            <div className="img-wrapper">
                <img src={ isInView1 ? srcs[0] : isInView2 ? srcs[1] : srcs[2]} alt='my project works'/>
            </div>
            <div>    
                <div className='li-work' ref={ref1}>
                    <Slide direction='right' in={isInView1} timeout={1500}>
                        <div>
                            <CardDetails title={titleList[0]} details={contentList[0]} />
                        </div>
                    </Slide>
                </div>
                    
                
                <div ref={ref2} className='li-work'>
                    <Slide direction='right' in={isInView2} timeout={1500}>
                        <div   >                
                            <CardDetails title={titleList[1]} details={contentList[1]} />
                        </div>
                    </Slide>
                </div>
                
                <div className='li-work' ref={ref3}>
                    <Slide direction='right' in={isInView3} timeout={1500}>
                        <div   >                
                            <CardDetails title={titleList[2]} details={contentList[2]} />
                        </div>
                    </Slide>
                </div>  
            </div>
        </section>
     );
}

export default CardsList;