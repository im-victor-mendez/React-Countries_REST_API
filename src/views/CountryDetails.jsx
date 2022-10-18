import '../styles/views/CountryDetails.scss'
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import Border from '../components/common/Border';
import { apiCountryByName } from '../utils/apiFunctions';
import Loading from '../components/common/Loading';

function CountryDetails() {
    const params = useParams()

    const [country, setCountry] = useState()
    const [languages, setLanguages] = useState()
    const [currencies, setCurrencies] = useState()

    useEffect(() => {
      apiCountryByName({name: params.country.toLowerCase()})
      .then(
        data => {
            setCountry(data[0])
            setLanguages(Object.keys(data[0].languages))
            setCurrencies(Object.keys(data[0].currencies))
        }
      )
    }, [])

    return country === undefined ? <Loading /> : <section id={`${params.country}`} className='country-details'>
        <img src={`${country.flags.png}`} alt="" />
        <div className='text'>
            <h1>{country.name.common}</h1>
            <div className='details'>
                <h2>Native Name: {
                    languages.map(
                        language => country.name.nativeName[language].common
                    )
                }</h2>
                <h2>Population: {country.population}</h2>
                <h2>Region: {country.region}</h2>
                <h2>Sub Region: {country.subregion}</h2>
                <h2>Capital: {country.capital}</h2>
                <h2>Top Level Domain: {country.tld}</h2>
                <h2>Currencies: {
                    currencies.map(
                        currency => country.currencies[currency].name
                    )
                }</h2>
                <h2>Languages: {
                    languages.map(
                        language => country.languages[language] + ' '
                    )
                }</h2>
            </div>
            {
                country.borders != undefined ?
                <h2 className='borders'>Border Countries: {
                    country.borders.map(
                        border => <Border border={border} />
                    )
                }</h2> : <></>
            }
        </div>
    </section>
}

export default CountryDetails