import '../../styles/components/common/Country.scss'
import React from 'react'
import { NavLink } from 'react-router-dom'
import CountryData from './CountryData'

function Country({flag, name, population, region, capital}) {
  return <section className='country'>
    <NavLink to={`/${name}`}>
      <img src={flag} alt="" />
      <h1>{name}</h1>
    </NavLink>
    
    <CountryData title={'Population'} data={population} />
    <CountryData title={'Region'} data={region} />
    <CountryData title={'Capital'} data={capital} />
  </section>
}

export default Country