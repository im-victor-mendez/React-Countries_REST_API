import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CountryList from '../components/layouts/CountryList'
import Filters from '../components/layouts/Filters'
import { setList } from '../stateManagement/countrySlice'
import { apiAllCountries } from '../utils/apiFunctions'
import { filter, search } from '../utils/reusableFunctions/filter'

function Countries() {
    const view = useSelector(state => state.countryList)
    const filterStore = useSelector(state => state.filters)

    const dispatch = useDispatch()
    
    useEffect(() => {
        apiAllCountries()
        .then(
        data => {
            dispatch(
            setList(data)
            )
        }
        )
    }, [])

    return <section id='countries'>
        <Filters />
        <CountryList view={
        view
        .filter((country) => search(filterStore.search, country))
        .filter((country) => filter(filterStore.filter, country))
        } />    
    </section>
}

export default Countries