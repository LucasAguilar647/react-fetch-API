import React, { useState } from 'react'
import AddCategoria from './AddCategoria';
import GifGrid from './GifGrid';


const GifExpertApp = () => {

    const [categorias, setCategorias] = useState( ['Dragon ball'] );

    return (
        <>
            <h2>GifExpertApp</h2>

            <AddCategoria setCategorias= {setCategorias} categorias = {categorias } />

            <hr />

            <ol>
                { 
                    categorias.map( categorias =>
                         <GifGrid 
                         key = { categorias }
                         categoria = { categorias } />
                        )
                }
            </ol>

        </>
    )
}

export default GifExpertApp;