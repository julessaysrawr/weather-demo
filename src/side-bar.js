/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import data from './data/top-cities.json'

export default function SideBar({ setLocation }) {
  return (
    <div
      css={css`
        width: 30%;
      `}
    >
      <h2
        css={css`
          text-align: center;
        `}
      >
        Top Cities
      </h2>
      {data.TopCities.map((city, i) => {
        return (
          <div
            key={i}
            css={css`
              background-color: #f8ebdd;
              height: 50px;
              border-radius: 5px;

              // width: 200px;
              width: 100%;

              &:hover {
                background-color: #eecdaa;
                cursor: pointer;
              }
            `}
          >
            <p
              css={css`
                padding: 15px;
                font-weight: 600;
                font-size: 18px;
                font-family: sans-serif;
              `}
              // onClick={() => clickHandler(city)}
              aria-label={city.name}
              role="button"
              onClick={() => setLocation(city)}
            >
              {i + 1}. {city.name}
            </p>
          </div>
        )
      })}
    </div>
  )
}
