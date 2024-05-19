import React from 'react'
import './style.css'
import linkedIn from './../../img/icons/linkedIn.svg'
import instagram from './../../img/icons/instagram.svg'
import gitHub from './../../img/icons/gitHub.svg'

export const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="container">
                    <div className="footer__wrapper">
                        <ul className="social">
                            <li className="social__item"><a href="https://instagram.com/__nowruzzz"><img src={instagram} alt="Link" /></a></li>
                            <li className="social__item"><a href="https://github.com/Novruz3"><img src={gitHub} alt="Link" /></a></li>
                            <li className="social__item"><a href="https://ru.linkedin.com/"><img src={linkedIn} alt="Link" /></a></li>
                        </ul>
                        <div className="copyright">
                            <p>© 2024 frontend-dev.com</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
