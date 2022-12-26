import axios from 'axios';
import { useState } from 'react';
const Weather = () =>{
        const [weather,setWeather] = useState("")
        const apiCall = async (e) => {
        e.preventDefault()
        const city = e.target.elements.loc.value
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=997ea79e1c9575bd4f087cf90e68205d&units=metric`
        const request = axios.get(url)
        const response = await request
        console.log(response.cod)
        // console.log(response.data.name+"'s Temp:",response.data.main.temp)
        if(response.data.cod==200){
            setWeather({
            city : response.data.name,
            temp : response.data.main.temp,
            hum  : response.data.main.humidity,
            lon : response.data.coord.lon,
            lat : response.data.coord.lat,
        })
    }
    }
    const Forecast = () =>{
        return(
            <div>
                <h1>City: {weather.city}</h1>
                <h1>Temp: {weather.temp}&#8451;</h1>
                <h1>Humidity: {weather.hum}&#37;</h1>
                <h1>Longitude: {weather.lat}</h1>
                <h1>Longitude: {weather.lon}</h1>

            </div>
        )
    }
    return(
        <div>
            <form onSubmit={apiCall}>
                <input type="text" placeholder="Please enter city name" name='loc'></input>
                <button>Search</button>
            </form>
            <Forecast/>
        </div>
    )
} 
export default Weather