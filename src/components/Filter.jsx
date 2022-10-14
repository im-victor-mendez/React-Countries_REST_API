import React from 'react'
import { useDispatch } from 'react-redux';
import { v4 as key } from "uuid";
import { setFilter } from '../stateManagement/filterSlice';


function Filter({filters}) {
  const dispatch = useDispatch()
  
  return <select
  name="filter"
  id="filter"
  onChange={
    e => dispatch(
      setFilter(
        e.target.value
      )
    )
  }>
    <option defaultValue={'Filter by Region'}>Filter by Region</option>
    {
        filters.map(
            filter => <option key={key()} value={filter}>{filter}</option>
        )
    }
  </select>
}

export default Filter