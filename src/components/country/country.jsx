import React, { useState } from 'react';
import './country.css'
const Country = ({country , handleVisitedCountries}) => {
    //console.log(handleVisitedCountries)

    const [visited, setVisited] = useState(false);

    //console.log(country.area.area)
 const handleVisited = () => {
   if(visited){
     setVisited(false)
   }
   else{
    setVisited(true)
   }
  handleVisitedCountries(country)

   
} 
  
    return(
        <div className= {`country ${ visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} /> 
            <h3>Common Name: {country.name.common}</h3>
            <h3>Official Name: {country.name.official}</h3>

            <p>Region: {country.region.region}</p>
            <p>Population: {country.population.population}</p>
            <p></p>
            <p>Area: {country.area.area} {country.area.area >300000 ? "Big Country" : " Small Country"} </p>
            <button onClick={handleVisited}>
                {visited ? 'Visited' : 'Not Visited'}
            </button>
        </div>
    )
};

export default Country;