
export default function NewsItem({ category, title, date, image, index, slug }) {

    return (
        <a href={`news/${slug}`} key={index} >
            <div className="NewsItem"
                key={index}
            // style={{ minWidth: index === 0 ? '100%' : "16" }}
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
