import React, { useEffect, useState } from 'react'
import { apiAllCountries } from '../../utils/apiFunctions'
import Country from '../Country'

/*
{
    "name": {
        "common": "Iceland",
        "official": "Iceland",
        "nativeName": {
            "isl": {
                "official": "Ísland",
                "common": "Ísland"
            }
        }
    },
    "tld": [
        ".is"
    ],
    "cca2": "IS",
    "ccn3": "352",
    "cca3": "ISL",
    "cioc": "ISL",
    "independent": true,
    "status": "officially-assigned",
    "unMember": true,
    "currencies": {
        "ISK": {
            "name": "Icelandic króna",
            "symbol": "kr"
        }
    },
    "idd": {
        "root": "+3",
        "suffixes": [
            "54"
        ]
    },
    "capital": [
        "Reykjavik"
    ],
    "altSpellings": [
        "IS",
        "Island",
        "Republic of Iceland",
        "Lýðveldið Ísland"
    ],
    "region": "Europe",
    "subregion": "Northern Europe",
    "languages": {
        "isl": "Icelandic"
    },
    "translations": {
        "ara": {
            "official": "آيسلندا",
            "common": "آيسلندا"
        },
        "bre": {
            "official": "Island",
            "common": "Island"
        },
        "ces": {
            "official": "Island",
            "common": "Island"
        },
        "cym": {
            "official": "Iceland",
            "common": "Iceland"
        },
        "deu": {
            "official": "Island",
            "common": "Island"
        },
        "est": {
            "official": "Islandi Vabariik",
            "common": "Island"
        },
        "fin": {
            "official": "Islanti",
            "common": "Islanti"
        },
        "fra": {
            "official": "République d'Islande",
            "common": "Islande"
        },
        "hrv": {
            "official": "Island",
            "common": "Island"
        },
        "hun": {
            "official": "Izland",
            "common": "Izland"
        },
        "ita": {
            "official": "Islanda",
            "common": "Islanda"
        },
        "jpn": {
            "official": "アイスランド",
            "common": "アイスランド"
        },
        "kor": {
            "official": "아이슬란드 공화국",
            "common": "아이슬란드"
        },
        "nld": {
            "official": "IJsland",
            "common": "IJsland"
        },
        "per": {
            "official": "جمهوری ایسلند",
            "common": "ایسلند"
        },
        "pol": {
            "official": "Republika Islandii",
            "common": "Islandia"
        },
        "por": {
            "official": "Islândia",
            "common": "Islândia"
        },
        "rus": {
            "official": "Исландия",
            "common": "Исландия"
        },
        "slk": {
            "official": "Islandská republika",
            "common": "Island"
        },
        "spa": {
            "official": "Islandia",
            "common": "Islandia"
        },
        "swe": {
            "official": "Island",
            "common": "Island"
        },
        "tur": {
            "official": "İzlanda",
            "common": "İzlanda"
        },
        "urd": {
            "official": "آئس لینڈ",
            "common": "آئس لینڈ"
        },
        "zho": {
            "official": "冰岛",
            "common": "冰岛"
        }
    },
    "latlng": [
        65,
        -18
    ],
    "landlocked": false,
    "area": 103000,
    "demonyms": {
        "eng": {
            "f": "Icelander",
            "m": "Icelander"
        },
        "fra": {
            "f": "Islandaise",
            "m": "Islandais"
        }
    },
    "flag": "🇮🇸",
    "maps": {
        "googleMaps": "https://goo.gl/maps/WxFWSQuc3oamNxoE6",
        "openStreetMaps": "https://www.openstreetmap.org/relation/299133"
    },
    "population": 366425,
    "gini": {
        "2017": 26.1
    },
    "fifa": "ISL",
    "car": {
        "signs": [
            "IS"
        ],
        "side": "right"
    },
    "timezones": [
        "UTC"
    ],
    "continents": [
        "Europe"
    ],
    "flags": {
        "png": "https://flagcdn.com/w320/is.png",
        "svg": "https://flagcdn.com/is.svg"
    },
    "coatOfArms": {
        "png": "https://mainfacts.com/media/images/coats_of_arms/is.png",
        "svg": "https://mainfacts.com/media/images/coats_of_arms/is.svg"
    },
    "startOfWeek": "monday",
    "capitalInfo": {
        "latlng": [
            64.15,
            -21.95
        ]
    },
    "postalCode": {
        "format": "###",
        "regex": "^(\\d{3})$"
    }
}
*/

function CountryList({view}) {
    return <section id='country-list'>
        {
            view.map(
                country => {
                    console.log(country)
                    return <Country
                    flag={country.flags.png}
                    name={country.name.common}
                    population={country.population}
                    region={country.region}
                    capital={country.capital} />
                }
            )
        }
    </section>
}

export default CountryList