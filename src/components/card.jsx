import React from 'react';

function Card(props) {
    return ( 
        <div className="card" style={{ backgroundColor: 'black' }}>
            <div className="image-wrapper">
                {
                    props.imgLinks.map((link,index)=>(
                        <img 
                        alt=""
                        src={link} 
                        key={index} 
                        className='imagi'
                        />
                    ))
                }
                
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.cardTitle}</h5>                
            </div>
        </div>
    );
}

export default Card;
