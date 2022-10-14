import React from 'react'
import Filter from '../Filter'

const values = ['1']

function Filters() {
  return <section id='filters'>
    <Filter values={values} />
  </section>
}

export default Filters