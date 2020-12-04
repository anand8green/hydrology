import Butter from 'buttercms'
import NavBar from './Component/NavBar';
import BubbleNew from './Component/Home/BubbleNew';
import Footer from './Component/Home/Footer'
import News from './Component/Home/News'

export default function NewsPage({ heading, subheading, newsItems }) {

    return (
        // <div className="dfdfd">
        //     {/* <div className="top" style={{ background: "#30bad2" }}>
        //         <NavBar />
        //     </div> */}

        //     <News newsItem={newsItems} />

        // </div>
        <div className="InsidePage">
            <NavBar />
            <div className="content">
                <News newsItem={newsItems} />
            </div>
            <div>
                <Footer />
            </div>
        </div>

    )
}

export const getStaticProps = async () => {

    const butter = Butter(process.env.BUTTER_CMS)
    const res = await butter.page.retrieve("*", "news")
    const news = await butter.post.list({ page_size: 6 })

    return {
        props: {
            heading: res.data.data.fields.heading,
            subheading: res.data.data.fields.subheading,
            newsItems: news.data.data,

        }
    }

}