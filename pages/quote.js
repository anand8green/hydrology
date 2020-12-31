import Butter from 'buttercms'
import NavBar from './Component/NavBar';
import BubbleNew from './Component/Home/BubbleNew';
import Footer from './Component/Home/Footer'
import useDarkMode from 'use-dark-mode';
import { db } from '../config/firebase'
import { useState } from 'react';
import axios from 'axios'
import { AnimatePresence, motion, useSpring } from 'framer-motion';

export default function Quote() {

    const mode = useDarkMode(false)

    const [name, setName] = useState("")
    const [companyname, setCompanyName] = useState("")
    const [postcode, setPostcode] = useState("")
    const [email, setEmail] = useState("")
    const [tel, setTel] = useState("")
    const [note, setNote] = useState("")
    const [unFilled, setUnfilled] = useState(false)
    const [modal, setModal] = useState(false)

    const myObj = {
        key: "quote",
        status: "published",
        fields: [
            {
                name: name,
                companyname: companyname,
                postcode: postcode,
                email: email,
                tel: tel,
                note: note
            }]
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(modal);
        axios.post('https://api.buttercms.com/v2/content', {
            ...myObj
        }, {
            headers: {
                'Authorization': `${process.env.MY_TOKEN}`
            }
        })
            .then(function (response) {

            }).catch(error => console.log(error.response))

        !name ? setUnfilled(true)
            :
            setModal(true)
        setName("")
        setCompanyName("")
        setPostcode("")
        setEmail("")
        setTel("")
        setNote("")

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

                    {/* Modal Pop up */}

                    {
                        modal && <motion.div className="form modal"
                            initial={{
                                x: "-50%",
                                scale: 0
                            }}
                            animate={{
                                scale: 1.5,
                                transition: {
                                    type: 'spring',
                                    duration: 1,
                                    delay: 0.3
                                }

                            }}
                        // exit={{
                        //     scale: 0, transition: {

                        //         type: 'tween',
                        //         duration: 0.3,
                        //     }
                        // }}
                        >
                            <h3>Thank you!</h3>
                            <p>
                                We have recived your details and one of our team member will contact you asap!

                             </p>
                        </motion.div>

                    }

                    <motion.div
                        // initial={{
                        //     scale: 1.5
                        // }}
                        animate={{
                            scale: modal ? 0 : 1,
                            opacity: modal ? 0 : 1,
                            transition: {
                                type: 'spring',
                                duration: 1,

                            }

                        }}

                    >
                        <form className="form" onSubmit={handleSubmit}
                        >
                            <label htmlFor=""> Full Name</label>
                            <input type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)} />

                            <label htmlFor=""> Company Name</label>
                            <input type="text"
                                value={companyname}
                                onChange={(e) => setCompanyName(e.target.value)}
                            />
                            <label htmlFor=""> Company Postcode</label>
                            <input type="text"
                                value={postcode}
                                onChange={(e) => setPostcode(e.target.value)}
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
                            {
                                unFilled && <p style={{
                                    textAlign: 'left',
                                    color: 'red',

                                }}>* Please fill in all required fields</p>
                            }
                            <button>Get a Quote</button>

                        </form>
                    </motion.div>

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