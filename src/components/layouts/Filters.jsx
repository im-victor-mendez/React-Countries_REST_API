import React from 'react'
import Filter from '../Filter'

const values = ['Africa', 'Europe']

function Filters() {
  return <section id='filters'>
    <Filter values={values} />
  </section>
}

export default Filters