import React from 'react';
import { useSelector } from 'react-redux';

function Content({wt}) {

    let day = wt.dt_txt.slice(0,10);
    let descp= wt.weather[0].description;
    let tempMax= wt.main.temp_max;
    let tempMin= wt.main.temp_min;
    let icon = wt.weather[0].icon;
    
    const items = useSelector((state) => state.weather.items);
    const cityName = items.city.name;
    const country = items.city.country;
    

    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let d = new Date(day);
    let dayName = days[d.getDay()];
    

  return (  
      <div className="m-auto">
        <div className="flex flex-row justify-between">
        </div>
            <div className="bg-gray-100 shadow-2xl w-52 rounded-3xl p-4 hover:bg-teal-300 hover:text-white">
                <h1 className='bg-orange-200 rounded-3xl p-2 mb-3 text-center'>{dayName}</h1>
                <h2 className="uppercase font-semibold" data-name={`${cityName},${country}`}>
                    <span>{cityName}</span>{" "}
                    <sup className='bg-orange-200 rounded-full p-1'>{country}</sup>
                </h2>
                <div className="mt-2">
                    {Math.floor(tempMax)}
                    <sup>°C</sup>
                    {" "}/{" "}{Math.floor(tempMin)}
                    <sup>°C</sup>
                </div>
                <figure>
                    <img className="city-icon" src={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${icon}.svg`} alt={`${descp}`}/>
                    <figcaption className='uppercase font-semibold'>{descp}</figcaption>
                </figure>
                </div>
      </div>
  )
}

export default Content