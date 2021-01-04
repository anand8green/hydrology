import Butter from 'buttercms'
import NavBar from './Component/NavBar';
import BubbleNew from './Component/Home/BubbleNew';
import Footer from './Component/Home/Footer'
import useDarkMode from 'use-dark-mode';
import { useState } from 'react';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded';
import { motion } from 'framer-motion';

export default function faqs({ heading, subheading, q1, q2, q3, q4, a1, a2, a3, a4 }) {

    const mode = useDarkMode(false)

    const [first, setfirst] = useState(false)
    const [second, setsecond] = useState(false)
    const [third, setthird] = useState(false)
    const [four, setfour] = useState(false)

    return (
        <div className="InsidePage">

            <div className="TopBar">
                <div className="TopBar__Content">
                    <NavBar />
                    <div className="Title">
                        <h1>{heading}</h1>
                        <p>{subheading}</p>
                    </div>
                </div>
                <BubbleNew />
            </div>

            <div className="content">
                <div className="text">

                    {/* first question */}
                    <div className="qbox">
                        <div className="question"
                            onClick={() => setfirst(!first)}
                            style={{
                                borderBottomLeftRadius: !first ? 20 : 0,
                                borderBottomRightRadius: !first ? 20 : 0,
                                borderTopLeftRadius: 20,
                                borderTopRightRadius: 20,
                            }}
                        >{q1}<span>{first ? <RemoveRoundedIcon className="plusIcon" /> : <AddRoundedIcon className="plusIcon" />}</span></div>

                        {first && <motion.div initial={{ y: -50 }} animate={{ y: -5 }} className="answer">{a1}</motion.div>}
                    </div>

                    {/* second question */}
                    <div className="qbox">
                        <div className="question"
                            onClick={() => setsecond(!second)}
                            style={{
                                borderBottomLeftRadius: !second ? 20 : 0,
                                borderBottomRightRadius: !second ? 20 : 0,
                                borderTopLeftRadius: 20,
                                borderTopRightRadius: 20,
                            }}
                        >{q2}<span>{second ? <RemoveRoundedIcon className="plusIcon" /> : <AddRoundedIcon className="plusIcon" />}</span></div>

                        {second && <motion.div initial={{ y: -50 }} animate={{ y: -5 }} className="answer">{a2}</motion.div>}
                    </div>

                    {/* third question */}
                    <div className="qbox">
                        <div className="question"
                            onClick={() => setthird(!third)}
                            style={{
                                borderBottomLeftRadius: !third ? 20 : 0,
                                borderBottomRightRadius: !third ? 20 : 0,
                                borderTopLeftRadius: 20,
                                borderTopRightRadius: 20,
                            }}
                        >{q3}<span>{third ? <RemoveRoundedIcon className="plusIcon" /> : <AddRoundedIcon className="plusIcon" />}</span></div>

                        {third && <motion.div initial={{ y: -50 }} animate={{ y: -5 }} className="answer">{a3}</motion.div>}
                    </div>
                    {/* four question */}
                    <div className="qbox">
                        <div className="question"
                            onClick={() => setfour(!four)}
                            style={{
                                borderBottomLeftRadius: !four ? 20 : 0,
                                borderBottomRightRadius: !four ? 20 : 0,
                                borderTopLeftRadius: 20,
                                borderTopRightRadius: 20,
                            }}
                        >{q4}<span>{four ? <RemoveRoundedIcon className="plusIcon" /> : <AddRoundedIcon className="plusIcon" />}</span></div>

                        {four && <motion.div initial={{ y: -50 }} animate={{ y: -5 }} className="answer">{a4}</motion.div>}
                    </div>

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
    const res = await butter.page.retrieve("*", 'faqs')

    console.log(res.data.data.fields.heading);

    return {
        props: {
            heading: res.data.data.fields.heading,
            subheading: res.data.data.fields.subheading,
            q1: res.data.data.fields.q1,
            a1: res.data.data.fields.a1,
            q2: res.data.data.fields.q2,
            a2: res.data.data.fields.a2,
            q3: res.data.data.fields.q3,
            a3: res.data.data.fields.a3,
            q4: res.data.data.fields.q4,
            a4: res.data.data.fields.a4
        }
    }
}

// export const getStaticProps = async () => {

//     const butter = Butter(process.env.BUTTER_CMS)
//     const res = await butter.page.retrieve("*", "benefits")

//     return {
//         props: {
//             heading: res.data.data.fields.heading,
//             subheading: res.data.data.fields.subheading,
//             body: res.data.data.fields.body,
//             image: res.data.data.fields.image

//         }
//     }

// }