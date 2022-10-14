import React from 'react'
import { v4 as key } from "uuid";

function Filter({values}) {
  return <select name="filter" id="filter">
    <option defaultValue={'Filter by Region'}>Filter by Region</option>
    {
        values.map(
            value => <option key={key()} value={value}>{value}</option>
        )
    }
  </select>
}

export default Filter