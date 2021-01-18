/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react'
import { css } from '@emotion/react'
import axios from 'axios'
import clearSky from './images/01d.png'
import fewClouds from './images/02d.png'
import scatteredClouds from './images/03d.png'
import brokenClouds from './images/04d.png'
import showerRain from './images/09d.png'
import rain from './images/10d.png'
import thunderstorm from './images/11d.png'
import snow from './images/13d.png'
import mist from './images/50d.png'

export default function LocationDetails({ location }) {
  const [loaded, setLoaded] = useState(false)
  const [temp, setTemp] = useState(null)
  const [conditions, setConditions] = useState(null)
  const [isError, setIsError] = useState(false)

  const apiURL = `https://api.openweathermap.org/data/2.5/weather?zip=${location.zipCode},us&units=imperial&appid=${process.env.REACT_APP_WEATHER_API_KEY}`

  const fetchData = async () => {
    setIsError(false)

    try {
      const response = await axios.get(apiURL)

      setTemp(response.data.main.temp)
      setConditions(response.data.weather[0].description)
    } catch (error) {
      console.log('error: ', error)
      setIsError(true)
    }
  }

  useEffect(() => {
    if (location.zipCode !== undefined) {
      fetchData()
      setLoaded(true)
    }
  }, [location])

  function getConditionImage(conditions) {
    if (conditions === null) {
      return
    }

    switch (conditions) {
      case 'clear sky':
        return <img src={clearSky} alt={`Current weather conditions are: ${conditions}`} />

      case 'few clouds':
        return <img src={fewClouds} alt={`Current weather conditions are: ${conditions}`} />

      case 'scattered clouds':
      case 'overcast clouds':
      case 'haze':
        // overcast clouds does not have an associated image https://openweathermap.org/weather-conditions so it was decided that scattered clouds was the best match
        return <img src={scatteredClouds} alt={`Current weather conditions are: ${conditions}`} />

      case 'broken clouds':
        return <img src={brokenClouds} alt={`Current weather conditions are: ${conditions}`} />

      case 'shower rain':
        return <img src={showerRain} alt={`Current weather conditions are: ${conditions}`} />

      case 'rain':
        return <img src={rain} alt={`Current weather conditions are: ${conditions}`} />

      case 'thunderstorm':
        return <img src={thunderstorm} alt={`Current weather conditions are: ${conditions}`} />

      case 'snow':
      case 'light snow':
        return <img src={snow} alt={`Current weather conditions are: ${conditions}`} />

      case 'mist':
        return <img src={mist} alt={`Current weather conditions are: ${conditions}`} />

      default:
        return undefined
    }
  }

  return (
    <div
      css={css`
        width: 60%;
        text-align: center;
      `}
    >
      {loaded ? <h2>Current Weather in {location.name}</h2> : <h2>Select a City to Begin</h2>}
      <section
        css={css`
          background-color: #f8ebdd;
          border-radius: 5px;
          height: 86.5%;
          padding-top: 30px;
        `}
      >
        <div
          css={css`
            height: 50px; // prevents content from jumping on first load
          `}
        >
          {getConditionImage(conditions)}
        </div>
        {loaded && !isError ? <p>Current conditions: {conditions || ''}</p> : ''}
        {loaded && !isError ? <p>Current Temperature: {`${Math.round(temp)}℉` || ''}</p> : ''}
        {isError ? <p>Something went wrong...</p> : ''}
      </section>
    </div>
  )
}
