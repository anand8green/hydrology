import Butter from 'buttercms'
import NavBar from './Component/NavBar';
import BubbleNew from './Component/Home/BubbleNew';
import Footer from './Component/Home/Footer'
import useDarkMode from 'use-dark-mode';

export default function About({ heading, subheading, body }) {
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

            <div className="content">

                <div className="box">
                    <div dangerouslySetInnerHTML={createMarkup()}
                        className="contactInfo"
                    />

                    <div className="map">
                        <iframe title="Map" class="col-start-2 col-end-4" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2290.0390427386606!2d-1.625569184099623!3d54.972414480351915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x54b89016fafd9d53!2sGreen!5e0!3m2!1sen!2suk!4v1559568093914!5m2!1sen!2suk" width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>

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
    const res = await butter.page.retrieve("*", "contact")

    return {
        props: {
            heading: res.data.data.fields.heading,
            subheading: res.data.data.fields.subheading,
            body: res.data.data.fields.body,

        }
    }

}