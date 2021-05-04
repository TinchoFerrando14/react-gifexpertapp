import {useState, useEffect} from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        gifs:[],
        loading: true
    });

    //llama a getGifs solo una única vez por más que se actualice el component
    useEffect ( () => {
        getGifs(category)
        .then(gifs => setState({
            gifs: gifs,
            loading: false
            })
        )
        
    },[category])//si cambia la categoría se dispara nuevamente

    return state;
}