import React, { useEffect } from 'react'
import { apiAllCountries } from '../../utils/apiFunctions'
import Filter from '../Filter'
import Search from '../Search'

var filters = []

function Filters() {
  useEffect(() => {
    apiAllCountries()
    .then(
      data => {
        data.map(
          country => {
            filters.push(country.region)
          }
        )
      }
    )
  }, [])
  filters = Array.from(new Set(filters))
  
  return <section id='filters'>
    <Search />
    <Filter filters={filters} />
  </section>
}

export default Filters