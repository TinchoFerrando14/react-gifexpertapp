import React, {useState} from 'react'
import PropTypes from 'prop-types'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid';

const GifExpertApp = props => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState(['One Punch']);

    const addCategory = (newCategory) =>{
        setCategories([newCategory,...categories]);
    }

    return (<>
        <h2>GifExpertApp</h2>
        <hr></hr>   
        <AddCategory addCategory = {addCategory}/>      
        <ol>
            {
                categories.map((category) =>(
                    <GifGrid 
                    key = {category}
                    category = {category}
                    />
                ))
            }
        </ol>
        </>
    )
}

GifExpertApp.propTypes = {

}

export default GifExpertApp
