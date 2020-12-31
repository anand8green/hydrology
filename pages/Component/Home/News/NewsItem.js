
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive'

export default function NewsItem({ category, title, date, image, index, slug }) {

    const isMobile = useMediaQuery({ query: `(min-width: 800px)` })

    console.log(isMobile);

    return (
        <a href={`news/${slug}`} key={index} >

            <div className="NewsItem"
                key={index}
                style={{
                    // padding: 0,
                    // background: index === 0 && isMobile ? "red" : "green",
                    // fontSize: index === 0 && isMobile ? 60 : 10,
                    // width: index === 0 && isMobile ? null : "550px",
                    // width: index === 0 && 550,
                    // width: index === 0 && isMobile ? '100%' : 550
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
