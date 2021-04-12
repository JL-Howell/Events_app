import React, {useState, useEffect} from 'react';
import {usePosition} from 'use-position';
import TempButton from './TempButton';
import Location from './Location';
import Conditions from './Conditions';

const Weather = () => {
    const {
        latitude,
        longitude,
    } = usePosition();

    
    
    const [fahrenheitWeather, setFahrenheitWeather] = useState([]);
    const [celsiusWeather, setCelsiusWeather] = useState([]);
    const [degreeType, setDegreeType] = useState('imperial');

    const getFahrenheit = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=4f8222f6dcf630b07c31a2f43d759446`,{
            method: 'GET',
            
        })
        .then(res => res.json())
        .then(res => setFahrenheitWeather(res))
    }
    const getCelsius = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=4f8222f6dcf630b07c31a2f43d759446`,{
            method: 'GET',
            
        })
        .then(res => res.json())
        .then(res => setCelsiusWeather(res))
    }
    
    useEffect(() => {
        if (!latitude || !longitude) return; 
        getFahrenheit();
        getCelsius();
        // eslint-disable-next-line
    }, [latitude, longitude])
        
    return (
            <div className="weather">
                <div className="weatherDiv">
                    <h2>Current Weather Conditions</h2>
                    <Conditions weather ={degreeType === 'metric' ? celsiusWeather : fahrenheitWeather} />
                    <TempButton degreeType = {degreeType} setDegreeType = {setDegreeType}/>
                    <Location />
                </div>
            </div>
        )
};

export default Weather;
