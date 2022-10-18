import '../../styles/components/layouts/Filters.scss'
import React, { useEffect } from 'react'
import { apiAllCountries } from '../../utils/apiFunctions'
import Filter from '../common/Filter'
import Search from '../common/Search'

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