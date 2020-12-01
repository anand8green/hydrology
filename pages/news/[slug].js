import Butter from 'buttercms'
import NavBar from '../Component/NavBar';
import BubbleBg from '../Component/Home/BubbleBg';

export default function Post({ data }) {

    function createMarkup() {
        return { __html: data.body }
    }

    return (

        <div className="Hero">

            {/* <NavBar />
            <img src={data.featured_image} />
            <div className="Hero__Content">
                <div className="Hero__Text">
                    <h1>{data.title}</h1>
                </div>
            </div>

            <div dangerouslySetInnerHTML={createMarkup()} />

            <BubbleBg /> */}

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