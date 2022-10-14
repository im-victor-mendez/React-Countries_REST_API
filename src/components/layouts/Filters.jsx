import React, { useEffect } from 'react'
import { apiAllCountries } from '../../utils/apiFunctions'
import Filter from '../Filter'

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
    <Filter filters={filters} />
  </section>
}

export default Filters