import React, { use } from 'react';
import Country from '../country/country';
import './countries.css'

const Countries = ({ countriesPromise }) => {
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    
   

    return (
        <div >
            <h2>In the countries: {countries.length}</h2>
           <div className='countries'>
             {
                countries.map(country => (
                    <Country country={country}
                    key={country.cca3}
                    
                    ></Country>
                ))
            }
           </div>
        </div>
    );
};

export default Countries;