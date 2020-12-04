import NewsItem from "./News/NewsItem";

import Butter from 'buttercms'

export default function NewsComp(props) {

    return (

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

    )
}
