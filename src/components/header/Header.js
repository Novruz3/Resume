import React from 'react'
import './style.css'
const CV = "http://localhost:3000/CV_NOWRUZ.pdf"

export const Header = () => {
  return (
    <div>
        <header className="header">
              <div className="header__wrapper">
                  <h1 className="header__title">
                      <strong>Hi, my name is <em>Nowruz</em></strong><br/>
                      a frontend developer
                  </h1>
                  <div className="header__text">
                      <p>with passion for learning and creating.</p>
                  </div>
                  <a href={CV} download className="btn">Download CV</a>
              </div>
          </header>
    </div>
  )
}
