
import { useMediaQuery } from 'react-responsive'

export default function NewsItem({ category, title, date, image, index, slug }) {

    const isMobile = useMediaQuery({ query: `(max-width: 800px)` })

    console.log(isMobile);

    return (
        <a href={`news/${slug}`} key={index} >
            <div className="NewsItem"
                key={index}
                style={{
                    padding: 0,
                    width: index === 0 && !isMobile ? 550 : null,
                    // width: index === 0 && isMobile ? '100%' : null,
                    // backgroundColor: isMobile ? "red" : "green",

                }}
            >
                <img className="pic" src={image}>
                </img>

                <div className="info">
                    <p className="info__industry">{category}</p>
                    <h3 className="info__title">{title}</h3>
                    <p className="info__date">{date}</p>
                </div>

            </div >
        </a >
    )
}
