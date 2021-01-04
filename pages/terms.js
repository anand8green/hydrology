import Butter from 'buttercms'
import NavBar from './Component/NavBar';
import BubbleNew from './Component/Home/BubbleNew';
import Footer from './Component/Home/Footer'
import useDarkMode from 'use-dark-mode';

export default function Privacy({ heading, subheading, body }) {
    function createMarkup() {
        return { __html: body }
    }

    const mode = useDarkMode(false)

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

            <div className="contentLong" >

                <div className="box">
                    <div dangerouslySetInnerHTML={createMarkup()}
                        className="contactInfo"
                    />

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
    const res = await butter.page.retrieve("*", "terms")

    return {
        props: {
            heading: res.data.data.fields.heading,
            subheading: res.data.data.fields.subheading,
            body: res.data.data.fields.body,

        }
    }

}