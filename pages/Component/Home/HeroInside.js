import NavBar from "../NavBar";
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

            </div>

            <BubbleNew />

        </div>
    )
}
