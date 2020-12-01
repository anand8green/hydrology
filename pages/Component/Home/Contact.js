import React, { useEffect, useState } from 'react'
import { db } from '../../../config/firebase'

export default function Contact({ contact_title, contact_subtitle }) {

    const [name, setName] = useState("")
    const [companyName, setCompanyName] = useState("")
    const [email, setEmail] = useState("")
    const [tel, setTel] = useState("")
    const [note, setNote] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        // Stor in firebase

        db.collection('hydroContacts').add({
            name,
            companyName,
            email,
            tel,
            note
        })

    }

    return (
        <div className="Contact">
            <div className="Contact__Content">
                <div className="title">
                    <h1>{contact_title}</h1>
                    <p>{contact_subtitle}</p>
                </div>

                {/* FORM START HERE */}

                <form className="form" onSubmit={handleSubmit}>
                    <label htmlFor=""> Full Name</label>
                    <input type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />

                    <label htmlFor=""> Company Name</label>
                    <input type="text"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                    />
                    <label htmlFor=""> Contact Email</label>
                    <input type="email" value={email}
                        onChange={(e) => setEmail(e.target.value)} />

                    <label htmlFor=""> Contact Telephone</label>
                    <input type="tel" value={tel} pattern="[0-9]*"
                        onChange={(e) => setTel(e.target.value)} />
                    <label htmlFor=""> Notes</label>

                    <input type="text" value={note}
                        onChange={(e) => setNote(e.target.value)} />
                    <button>Submit</button>
                    <p>We aim to get back to you within 48 hours.</p>
                </form>
            </div>

        </div>
    )
}
