
import { useState } from 'react';
import './Country.css'
const Country = ({country}) => {
    console.log(country)
    const {name, flags, population, area} = country;
     
    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited (!visited);
    }

    return (
        <div className="country">
            <h4>{name?.common} </h4>
            <img src={flags.png} alt="" />
            <h3>Population : {population}</h3>
            <h4>Area : {area}</h4>
            <button onClick={handleVisited} >{visited ? 'Visited':'Going'} </button>
            { visited ? 'I have visited this Country' : 'I want to visited ' }
        </div>
    );
};

export default Country;