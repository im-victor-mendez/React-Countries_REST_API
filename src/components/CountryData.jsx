import React from 'react'

function CountryData({title, data}) {
  return <div className='data'>
    <h1>{title}</h1>
    <p>{data}</p>
  </div>
}

export default CountryData