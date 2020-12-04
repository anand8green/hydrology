import Butter from 'buttercms'
import NavBar from './Component/NavBar';
import BubbleNew from './Component/Home/BubbleNew';
import Footer from './Component/Home/Footer'
import useDarkMode from 'use-dark-mode';
import NewsComp from './Component/Home/NewsComp';

export default function NewsPage({ heading, subheading, newsItems }) {
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
            <div className="newsItems">
                <div className="wrapper">
                    <NewsComp newsItem={newsItems} />
                </div>

            </div>

            {/*
                    <div className="pic">
                         <img src={image} alt="" />
                    </div>
                    <div dangerouslySetInnerHTML={createMarkup()}
                        className="info" /> */}

            <Footer />
        </div>

    )
}

export const getStaticProps = async () => {

    const butter = Butter(process.env.BUTTER_CMS)

    const news = await butter.post.list({})
    let resNews = await butter.page.retrieve("*", "news")

    return {
        props: {
            heading: resNews.data.data.fields.heading,
            subheading: resNews.data.data.fields.subheading,
            newsItems: news.data.data,
        }

    }
}
