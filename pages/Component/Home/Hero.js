import NavBar from "../NavBar";
import BubbleNew from "./BubbleNew";
import Link from 'next/link'

export default function Hero({ title, subtitle }) {
    return (

        <div className="Hero">

            <NavBar />

            <div className="Hero__Content">
                <div className="Hero__Text">
                    <h1>{title}</h1>
                    <p>{subtitle}</p>
                </div>

                <div className="Hero__Form">
                    <input type="text" placeholder="E-mail address" />
                    <Link href="/quote">
                        <button>Get a Quote</button>
                    </Link>
                </div>
            </div>

            {/* <BubbleBg /> */}

            <BubbleNew />

        </div>
    )
}
