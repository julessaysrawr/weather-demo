/** @jsxImportSource @emotion/react */
import React, { useState } from 'react'
import { css } from '@emotion/react'
import SideBar from './side-bar'
import LocationDetails from './location-details'

function App() {
  const [location, setLocation] = useState({})

  return (
    <div className="App">
      <header
        css={css`
          text-align: center;
        `}
      >
        <h1
          css={css`
            margin: 40px 0;
          `}
        >
          Current Weather
        </h1>
      </header>
      <main
        css={css`
          display: flex;
          justify-content: space-around;
          margin: 0 auto;
          max-width: 800px;
        `}
      >
        <SideBar setLocation={setLocation} />
        <LocationDetails location={location} />
      </main>
    </div>
  )
}

export default App
