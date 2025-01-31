import React from 'react'
import './Card.css'


const Card = (props) => {
    return (
        <div className='wrapper'>
            <img src={props.image} width={props.imgWidth} height={props.imgHeight} alt=''/>
            <div> {props.content} </div>
        </div>
    )
}

export default Card