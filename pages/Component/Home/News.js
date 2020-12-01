import NewsItem from "./News/NewsItem";

import Butter from 'buttercms'

export default function News(props) {

    return (
        <div className="News">
            <div className="News__Content">
                <div className="Title">
                    <h1>Our latest news</h1>
                    <p>Check out what we are up to as well as industry updates.</p>
                </div>
                <div className="NewsBox">
                    {
                        props.newsItem ?
                            props.newsItem.map((item, index) => {

                                const sentence = item.title.length > 45 ?

                                    item.title.substring(0, 45) + "..." :

                                    item.title

                                let category = item.categories[0] !== undefined ? item.categories[0].name : "Industry";
                                let date = item.published.substring(0, 10)
                                date = new Date(date)
                                const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Augest', 'September', 'October', 'November', 'December']
                                date = `${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`;

                                return (NewsItem({
                                    image: item.featured_image,
                                    category: category,
                                    date: date,
                                    title: sentence,
                                    index: index,
                                    slug: item.slug,
                                })

                                )
                            }) : null
                    }

                </div>

            </div>

        </div>
    )
}
