import '../styles/CountryDetails.scss'
import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import Border from '../components/common/Border';

function CountryDetails() {
    const params = useParams()
    const country = useSelector(state => state.countryList)
    .find(
        country => {
            if(country.name.common == params.country)
                return country
        }
    )
    console.log(country.borders)

    return <section id={`${params.country}`} className='country-details'>
        <img src={`${country.flags.png}`} alt="" />
        <div className='text'>
            <h1>{country.name.common}</h1>
            <div className='details'>
                {/* To check isl */}
                <h2>Native Name: {/*country.name.nativeName.isl.common*/}</h2>
                <h2>Population: {country.population}</h2>
                <h2>Region: {country.region}</h2>
                <h2>Sub Region: {country.subregion}</h2>
                {/* To check capital */}
                <h2>Capital: {country.capital}</h2>
                {/* To check tld */}
                <h2>Top Level Domain: {country.tld}</h2>
                {/* To check ISK */}
                <h2>Currencies: {/*country.currencies.ISK.name*/}</h2>
                {/* To check isl */}
                <h2>Languages: {/*country.languages.isl*/}</h2>
            </div>
            {/* To check */}
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