import React from 'react'
import {FormControl} from 'react-bootstrap'

const FilterByName = ({inputSearch, setInputSearch}) => {
    return (
        <div>
        <FormControl  type="search" 
        placeholder="Enter Movie Name" 
        className="me-2"
        aria-label="Search"
        onChange={(e) => setInputSearch(e.target.value)} value={inputSearch} 
        />
        </div>
    )
}

export default FilterByName
