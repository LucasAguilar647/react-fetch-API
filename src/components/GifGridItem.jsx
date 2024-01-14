import React from 'react'
import '../index.css'

const GifGrifItem = ( {id, title, url} ) =>{

   
    return(
        <div className='card'>
            <p> { title } </p>
            <img src={url} alt= {title} />
        </div>
    )

}

export default GifGrifItem;
