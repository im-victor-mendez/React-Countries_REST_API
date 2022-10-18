import '../../styles/CountryList.scss'
import React from 'react'
import Country from '../Country'
import { v4 as key } from "uuid";
import Loading from '../common/Loading';

function CountryList({view}) {
    console.log(view.length < 1)
    return <section id='country-list'>
        {
            view.length < 1 ? <Loading /> :
            view.map(
                country => <Country
                    key={key()}
                    flag={country.flags.png}
                    name={country.name.common}
                    population={country.population}
                    region={country.region}
                    capital={country.capital} />
            )
        }
    </section>
}

export default CountryList