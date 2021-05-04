import React from 'react'
import PropTypes from 'prop-types'
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ({category}) => {

    const {loading,gifs} = useFetchGifs(category);
  
    return (
        <>
            <h3>{category}</h3>    
            {loading && 'Cargando...'}
            <div className= "card-grid">                    
                {
                    gifs.map((gif) =>(
                        <GifGridItem 
                            key = {gif.id}
                            {...gif}       
                        />
                    ))
                } 
            </div>
        </>
    )
}

GifGrid.propTypes = {

}

export default GifGrid
