import { useState } from 'react';
import axios from 'axios'
const Covid = () =>{
    const [details,setDetails] = useState("")

    const searchDetails = async(e) => {
        e.preventDefault()
        const country = e.target.elements.getCountry.value
        const url = `https://api.covid19api.com/summary`
        const request = axios.get(url)
        const response = await request
        // console.log(response)
        const givenCoun = e.target.elements.getCountry.value
        const countries = response.data.Countries
        
        const len = Object.keys(countries).length
        var count = 0
        console.log(len)
        for (let coun of countries){
            count++
            if (coun.Country == givenCoun){
                setDetails({
                    c : coun.Country,
                    conf : coun.TotalConfirmed,
                    deaths  : coun.TotalDeaths,
                    
                })
                break
            }
        }
        console.log(len,count)
        if(len == count){
            setDetails({
                c : "Country name not exists",
                conf : "-",
                deaths  : "-",
                
            })
        }
        
    }
    return(
        <div>
            <form onSubmit={searchDetails}>
            <input type ="text" name="getCountry" placeholder="Enter country name"/>
            <button>Search</button>
            </form>
            <h1>Country Name: {details.c} </h1>
            <h1>Total Confirmed: {details.conf}</h1>
            <h1>Total Deaths: {details.deaths}</h1>

        </div>
    )
}
export default Covid