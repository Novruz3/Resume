import React from 'react'

export const Contacts = () => {
  return (
    <div>
        <main className="section">
        <div className="container">
                <h1 className="title-1">Contacts</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>Ashgabat, Turkmenistan</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram / WhatsApp</h2>
                        <p><a href="tel:+79051234567">+993 (62) 11-18-77</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="owliyagulyyewnowruz@gmail.com">owliyagulyyewnowruz@gmail.com</a></p>
                    </li>
                </ul>

        </div>
    </main>
    </div>
  )
}
