import React from 'react'


function CardDetails(props) {
    return ( 
        <div className='card-details' >
            <h1>{props.title}</h1>
            <p>{props.details}</p>
        </div>
     );
}

export default CardDetails;