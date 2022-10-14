import React from 'react'
import Country from '../Country'
import { v4 as key } from "uuid";

function CountryList({view}) {
    return <section id='country-list'>
        {
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