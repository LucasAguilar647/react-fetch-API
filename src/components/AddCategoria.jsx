import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategoria = ( {setCategorias , categorias}  ) => {

    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) =>{
        setInputValue( e.target.value )

    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCategorias( [inputValue ,...categorias] );
            setInputValue('');
        }


    }

    return (
        <form onSubmit={ handleSubmit }>   
            <input 
               type="text"
               value = { inputValue }
               onChange={ handleChange }
            /> 
        </form>
      
    )
}

AddCategoria.propTypes ={
   categorias : PropTypes.array.isRequired,
   setCategorias : PropTypes.func.isRequired
}

export default AddCategoria;
