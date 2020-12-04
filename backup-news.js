import Butter from 'buttercms'

import NewsItem from './Component/Home/News/NewsItem'

export default function News(props) {

    return (
        // <div className="NewsBox">
        //     <h1>This is the news page</h1>
        //     {
        //         props.newsItem.map((item, index) => {

        //             const newCatogory = item.categories[0]?.name === undefined ? "Industry" : item.categories[0].name
        //             const newDate = new Date(item.published);
        //             const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Augest', 'September', 'October', 'November', 'December']
        //             const month = months[newDate.getMonth()]
        //             const day = newDate.getDate()
        //             const year = newDate.getFullYear()
        //             const showNewDate = `${month} ${day}, ${year}`

        //             return (
        //                 < NewsItem
        //                     category={newCatogory}
        //                     title={item.title}
        //                     date={showNewDate}
        //                     image={item.featured_image}
        //                     key={index}
        //                     slug />
        //             )
        //         })
        //     }

        // </div>
    )
}

export const getStaticProps = async () => {

    const butter = Butter(process.env.BUTTER_CMS)
    let res = await butter.post.list()

    return {
        props: {
            newsItem: res.data.data
        }

    }
}