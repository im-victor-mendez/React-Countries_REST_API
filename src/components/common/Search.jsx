import React from 'react'
import { useDispatch } from 'react-redux';
import { setSearch } from '../../stateManagement/filterSlice';

function Search() {
    const dispatch = useDispatch()
    return <input
    type="search"
    name="search"
    id="search"
    placeholder='Search for a country...'
    onChange={
      e => dispatch(setSearch(e.target.value))
    } />
}

export default Search