import React from 'react'
import CountryData from './CountryData'

function Country({flag, name, population, region, capital}) {
  return <section className='country'>
    <img src={flag} alt="" />
    <h1>{name}</h1>
    <CountryData title={'Population'} data={population} />
    <CountryData title={'Region'} data={region} />
    <CountryData title={'Capital'} data={capital} />
  </section>
}

export default Country