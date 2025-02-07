import React, { useState } from 'react';
import './App.css';
import { FaWind, FaDroplet, FaCloudRain, FaCloudSunRain, FaSmog } from "react-icons/fa6";
import { useEffect } from 'react';


export default function App() {
    const [data,setData] = useState("chennai");
    const [apiData,setApiData] = useState(null);

    const store = (event) => {
        setData(event.target.value);
    };

    useEffect(()=>{
        getApiData();
    },[]);

    const getApiData = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=60026a71dc8866730ae8d4015554b6ca`).then((item)=>item.json()).then((value)=>setApiData(value));
    }

    console.log(apiData);
    return (
      <div className='overall'>
        <div className='card'>
            <h1 className='title'> Weather Card </h1>
            <div className='typingBox'>
                <input onChange={store} type="text" placeholder='Enter your city name...' />
                <button onClick={getApiData} className='search'> Search </button>
            </div>
            <h1>{apiData && apiData.name}</h1>
            <div className='icons'>
                {apiData && apiData.weather[0].main == "Rain" ? (<FaCloudRain className='cloud' />) : apiData && apiData.weather[0].main == "Mist" ? (<FaSmog className='cloud' />) : (<FaCloudSunRain className='cloud' />)}
                {/* <FaCloudRain className='cloud' /> */}
                {/* <FaCloudSunRain className='cloud' /> */}
                {/* <FaSmog className='cloud' /> */}
                <h1> {apiData && apiData.weather[0].main} </h1>
            </div>
            <div className='box'>
                <div className='Humidity side'>
                    <h1>Humidity</h1>
                    <div className='details'>
                        <FaDroplet />
                        <h1> {apiData && apiData.main.humidity}% </h1>
                    </div>
                </div>
                <div className='WindSpeed side'>
                    <h1>Wind Speed</h1>
                    <div className='details'>
                        <FaWind />
                        <h1> {apiData && apiData.wind.speed} </h1>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
};