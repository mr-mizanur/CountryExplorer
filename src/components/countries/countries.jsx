import React, { use, useState } from 'react';
import Country from '../country/country';
import './countries.css'

const Countries = ({ countriesPromise }) => {
    const [visitedCountry,setVisitedCountry ] = useState([ ]);

    const handleVisitedCountries =() =>{
        console.log('hello')
    }
    const countriesData = use(countriesPromise)

    const countries = countriesData.countries;
    
   

    return (
        <div >
            <h1>In the countries: {countries.length}</h1>
            <h3>Total Country Visited:</h3>
           <div className='countries'>
             {
                countries.map(country => (
                    <Country country={country}
                    key={country.cca3}
                    handleVisitedCountries={handleVisitedCountries}
                    ></Country>
                ))
            }
           </div>
        </div>
    );
};

export default Countries;