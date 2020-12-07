import Butter from 'buttercms'
import NavBar from '../Component/NavBar';
import Footer from '../Component/Home/Footer'
import useDarkMode from 'use-dark-mode';

export default function Post({ data }) {

    function createMarkup() {
        return { __html: data.body }
    }

    const mode = useDarkMode(false)

    return (

        <div className="InsidePage">

            <div className="TopBar">
                <div className="TopBar__Content">
                    <NavBar />
                </div>

            </div>

            <div className="content">

                <div className="NewsDetails" style={{
                    marginTop: -400
                }}>

                    <div className="picBar" style={{
                        marginBottom: 100
                    }}>
                        <div className="pic">
                            <img src={data.featured_image} />
                        </div>
                    </div>
                    <div className="content">
                        <div className="text">
                            <h1>{data.title}</h1>
                            <div dangerouslySetInnerHTML={createMarkup()}
                                className="info"
                            />
                        </div>

                    </div>

                </div>

            </div>
            <div>
                <Footer />
            </div>
        </div>

    )
}

export const getStaticPaths = async () => {
    // Call API
    const butter = Butter(process.env.BUTTER_CMS)

    let res = await butter.post.list()
    let news = res.data.data

    const paths = news.map(newsItem => `/news/${newsItem.slug}`)

    return { paths, fallback: false }

}

export const getStaticProps = async ({ params }) => {

    const butter = Butter(process.env.BUTTER_CMS)

    let res = await butter.post.retrieve(params.slug)
    let data = res.data.data

    return {
        props: {
            data: data
        }
    }

}