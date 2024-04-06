import React, { useState, useEffect, useRef } from 'react'

import sun from './../img/icons/sun.svg'
import moon from './../img/icons/moon.svg'

export const BtnDarkMode = () => {

    const [darkMode, setDarkMode] = useState('light')

    const btnRef = useRef(null)

    useEffect(() => {
        if (darkMode === 'dark') {
            document.body.classList.add('dark')
            btnRef.current.classList.add('dark-mode-btn--active')
        } else {
            document.body.classList.remove('dark')
            btnRef.current.classList.remove('dark-mode-btn--active')
        }
    })

    const onToggleDarkMode = () => {
        setDarkMode((currentValue) => {
            return currentValue === 'light' ? 'dark' : 'light'
        })
    }

    return (
        <div>
            <button ref={btnRef} className="dark-mode-btn" onClick={onToggleDarkMode}>
                <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
                <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
            </button>
        </div>
    )
}
