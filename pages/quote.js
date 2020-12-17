import Butter from 'buttercms'
import NavBar from './Component/NavBar';
import BubbleNew from './Component/Home/BubbleNew';
import Footer from './Component/Home/Footer'
import useDarkMode from 'use-dark-mode';
import { db } from '../config/firebase'
import { useState } from 'react';

export default function Quote() {

    const mode = useDarkMode(false)

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
        <div className="InsidePage">

            <div className="TopBar">
                <div className="TopBar__Content">
                    <NavBar />
                    <div className="Title">
                        <h1>Join the future.</h1>
                        <p>See the benefits and savings you could have with Hydrology.</p>
                    </div>
                </div>
                <BubbleNew />
            </div>

            <div className="content">

                <div className="text">

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
                        <button>Get a Quote</button>
                        <p style={{ color: 'darkgray' }}>We aim to get back to you ASAP!</p>
                    </form>

                </div>
            </div>

            <div>
                <Footer />
            </div>
        </div>

    )
}

export const getStaticProps = async () => {

    const butter = Butter(process.env.BUTTER_CMS)
    const res = await butter.page.retrieve("*", "contact")

    return {
        props: {
            heading: res.data.data.fields.heading,
            subheading: res.data.data.fields.subheading,
            body: res.data.data.fields.body,

        }
    }

}