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
                            <p style={{color : "blue"}} className="title-2">Skills</p>
                            <p className='skills__item'>HTML, CSS, Javascript, React JS, Next JS, Typescript, Tailwind CSS, Material UI, Framer Motion, Redux Toolkit, Zustand, React Query, Web Socket, Github, Axios, Rest API, Node JS, Express JS, PostgreSQL, Mongo DB, Sequlize, Prisma io</p>
                        </li>
                        <li className="content-list__item">
                            <p style={{color : "blue"}} className="title-2">Languages</p>
                            <p className='skills__item'>Turkmen, Russian, English</p>
                        </li>
                        <li className="content-list__item">
                            <p style={{color : "blue"}} className="title-2">Experience</p>
                            <div>
                                <p style={{fontSize:"28px", fontWeight:'800'}} className='skills__item__2'>Bereket Bendi HJ </p>
                                <p style={{fontSize:"28px", fontWeight:'500'}} className='skills__item'>Frontend Developer </p>
                                <p style={{fontSize: "24px"}} className='skills__item'>August 2024 - December 2024</p>
                            </div>
                            <div style={{marginTop:'30px',borderTop : "1px solid black", paddingTop:"20px"}}>
                                <p style={{fontSize:"28px", fontWeight:'800'}} className='skills__item__2'>Geek Space TM</p>
                                <p style={{fontSize:"28px", fontWeight:'500'}} className='skills__item'>Frontend Developer </p>
                                <p style={{fontSize: "24px"}} className='skills__item'>February 2024 - August 2024</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </main>
        </div>
    )
}
