export function filter(filters, country) {
    if(filters != 'Filter by Region')
      return country.region == filters
    return country.region
}