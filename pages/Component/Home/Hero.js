import NavBar from "../NavBar";
import BubbleNew from "./BubbleNew";
import Link from 'next/link'
import { useState } from "react";
import { useRouter } from 'next/router'

export default function Hero({ title, subtitle }) {

    const [email, setEmail] = useState("")
    const router = useRouter()

    const handleSubmit = (e) => {
        e.preventDefault()
        router.push('/quote')
    }

    return (
        <div className="Hero">
            <NavBar />
            <div className="Hero__Content">
                <div className="Hero__Text">
                    <h1>The Fresh Approach <br /> to Business Water</h1>
                    <p>{subtitle}</p>
                </div>
                <form action="" onSubmit={handleSubmit}>
                    <div className="Hero__Form">
                        <input type="email" required placeholder="E-mail address"
                            value={email} onChange={(e) => { setEmail(e.target.value) }}
                        />
                        <button type="submit" >Get a Quote</button>

                    </div>
                </form>

            </div>

            {/* <BubbleBg /> */}

            <BubbleNew />

        </div>
    )
}
