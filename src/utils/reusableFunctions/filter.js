export function filter(filters, country) {
    if(filters != 'Filter by Region')
      return country.region == filters
    return country.region
}

export function search(search, country) {
  if(search != '')
    return country.name.common.toLowerCase().includes(search.toLowerCase())
  return country.name.common
}