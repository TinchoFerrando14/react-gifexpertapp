import React, {useState} from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({addCategory}) => {

    const [inputValue, setInputValue] = useState('hola mundo');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();   
        
        if (inputValue.trim().length > 2) {
            addCategory(inputValue);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    addCategory: PropTypes.func.isRequired
}

export default AddCategory
