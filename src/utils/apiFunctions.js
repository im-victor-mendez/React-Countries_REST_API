/* API https://restcountries.com/v3.1/ */

const api = 'https://restcountries.com/v3.1/'

export async function apiAllCountries() {
    const response = await fetch(`${api}all`)
    const data = await response.json()
    return data
}