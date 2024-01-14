import React from 'react'
import GifGrifItem from './GifGridItem';
import useFetchGifs from '../hooks/useFetchGifs';
//import getGifs from '../helpers/getGifs';


const GifGrid = ( {categoria} ) => {

    /*const [images, setImages] = useState( [] );

    useEffect( ()=> {
       getGifs( categoria )
        .then ( imgs => setImages( imgs ) )
    },[ categoria])*/

    const { data: imagenes, loading } = useFetchGifs( categoria );

  return (
        <>

            <h3>{ categoria } </h3>

            {loading &&  <p>Loading</p> }
            
            <div className='card-grid'>
        
            {
                imagenes.map( img => ( 
                    <GifGrifItem 
                    key = { img.id }
                    { ...img }
                    />
                ))
            }
            </div> 
        </>
  )
}

export default GifGrid
