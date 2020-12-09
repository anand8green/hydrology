import MobileScreenShareIcon from '@material-ui/icons/MobileScreenShare';

export default function VideoComp({ video_title, video_subtitle }) {

    let title = video_title ? video_title.split(',') : null

    return (
        <div className="VideoComp">
            {video_title ?
                <div className="VideoContent">
                    <h2> <span>{title[0]},</span>{title[1]}</h2>
                    <p>{video_subtitle}</p>

                    <div className="VideoBox">

                        <div className="ItemBox">

                            <div className="Item">
                                <div className="IconBox">
                                    <img src="/icons/phone.svg" alt="" className="icon" />
                                </div>
                                <div className="InfoBox">
                                    <div className="titleBox">
                                        <h1>Get Quote</h1>
                                    </div>
                                    <div className="info">
                                        <p>When you submit your meter readings we will calculate your bill and analyse your usage.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="Item">
                                <div className="IconBox">
                                    <img src="/icons/contract.svg" alt="" className="icon" />
                                </div>
                                <div className="InfoBox">
                                    <div className="titleBox">
                                        <h1>Sign the Contract</h1>
                                    </div>
                                    <div className="info">
                                        <p>View insightful reports on your usage, get suggestions to save and predict your next bill.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="Item">
                                <div className="IconBox">
                                    <img src="/icons/supply.svg" alt="" className="icon" />
                                </div>
                                <div className="InfoBox">
                                    <div className="titleBox">
                                        <h1>Supply Ready</h1>
                                    </div>
                                    <div className="info">
                                        <p>Notifications are centralised, support is available in app or via telephone.</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="SvgBG" style={{
                            backgroundImage: "url('/icons/wave.svg')",
                            backgroundRepeat: "no-repeat",
                        }}>

                            {/* <svg preserveAspectRatio="none" viewBox="0 0 944 551">
                                <path d="M178.193.757C59.892 7.281.74 48.22.74 123.572c0 113.028 101.557 140.531 177.452 140.531 30.202 0 211.468 27.46 385.84-.71 73.438-11.864 256.211-119.49 355.437 0 41.26 49.687 27.853 181.02-39.304 233.523-94.346 73.76-268.483 58.833-316.134 28.698"
                                    fill="none" opacity="1" stroke="#30bad2" stroke-dasharray="12"></path></svg> */}

                        </div>

                    </div>
                </div>
                : null
            }
        </div>
    )
}
