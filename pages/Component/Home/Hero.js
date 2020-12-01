import NavBar from "../NavBar";
import BubbleBg from "./BubbleBg";
import BubbleNew from "./BubbleNew";

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
                    <button>Get a Quote</button>
                </div>
            </div>

            {/* <BubbleBg /> */}

            <BubbleNew />

        </div>
    )
}
