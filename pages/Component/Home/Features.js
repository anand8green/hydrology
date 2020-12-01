
export default function Features({ features_title, features_details, features_items }) {
    return (

        <div className="SubHero">

            <div className="SubHero__Content">
                <h1>{features_title}</h1>
                <p>{features_details}</p>
                <div className="SubHero__cms">

                    {
                        features_items ?
                            features_items.map((item, index) => {
                                return (
                                    <div className="SubHero__cms__tab" key={index}>
                                        <div className="icon">
                                            <img src={item.image} />
                                        </div>

                                        <div className="info">
                                            <p className="title">{item.top}</p>
                                            <p className="subTitle">{item.bottom}</p>
                                        </div>
                                    </div>
                                )
                            })

                            : null

                    }

                </div>

            </div>

        </div>
    )
}