import React, { useState } from 'react'

function Weather() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);

    const searchWeatherHandler = async () => {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=381dc41a33eab959409d4aa5df3c6551&units=metric`);
        const jsonData = await res.json();
        setWeather(jsonData);
    };
    console.log(weather);
    return (
        
        <div className='min-h-screen flex items-center justify-center bg-blue-100'>
            
            <div className='bg-white p-8 rounded-lg shadow-lg text-center'>
                <h1 className='text-3xl font-bold text-center mb-4'>Weather App</h1>
                <p>Get the latest weather updates for your location.</p>
                <input
                    type="text"
                    placeholder="Enter your city"
                    className="mt-4 p-2 border border-gray-300 rounded w-full" 
                value={city}
                    onChange={(e) => setCity(e.target.value)} 
                />
                <button onClick={searchWeatherHandler} className='bg-blue-400 p-2 w-full rounded mt-1.5 '>Search</button>
                <div className='text-center'>
                 {weather ? (
                    <>
                    <h2 className='text-xl font-semibold'>{weather.name}</h2>
                    <p className='text-gray-600'>{weather.weather ? weather.weather[0].description : ''}</p>
                    <p className='text-gray-600'>Temperature: {weather.main ? weather.main.temp : ''}°C</p>
                    <div className='mt-4'>
                        <p className='text-gray-600'>Humidity: {weather.main ? weather.main.humidity : ''}%</p>
                        <p className='text-gray-600'>Wind Speed: {weather.wind ? weather.wind.speed : ''} m/s</p>
                         </div>

                    </>
                 ) : null}
                       
                </div>
            </div>
        </div>
        
    );
};

export default Weather;
        