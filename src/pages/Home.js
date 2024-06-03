import React from 'react'
import { Header } from './../components/header/Header';

export const Home = () => {
    return (
        <div>
            <Header />
            <main className="section">
                <div className="container">
                    <ul className="content-list">
                        <li className="content-list__item">
                            <p className="title-2">Skills</p>
                            <p className='skills__item'>HTML, CSS, Javascript, Bootstrap, React JS, Next JS, Typescript, Tailwind CSS, Redux Toolkit, Zustand, Github, Axios, Rest API</p>
                        </li>
                        <li className="content-list__item">
                            <p className="title-2">Languages</p>
                            <p className='skills__item'>Turkmen, Russian, English</p>
                        </li>
                    </ul>
                </div>
            </main>
        </div>
    )
}
