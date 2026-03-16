import React, { use, useState } from 'react';
import Country from '../country/country';
import './countries.css'

const Countries = ({ countriesPromise }) => {

    const [visitedCountry, setVisitedCountry] = useState([]);

    const handleVisitedCountries = (country) => {
        const newVisitedCountries = [...visitedCountry, country];
        setVisitedCountry(newVisitedCountries);
    }

    const countriesData = use(countriesPromise)
    const countries = countriesData.countries;

  return (
  <div>
            <h1>🌍 Total Countries:  {countries.length}</h1>

    <h3>✈️ Countries You Visited: {visitedCountry.length}</h3>

            <div className='countries'>
                {
                    countries.map(country => (
                        <Country
            key={country.cca3}
                            country={country}
                            handleVisitedCountries={handleVisitedCountries}
                        />
                    ))
                }
    </div>
  </div>
);
};

export default Countries;