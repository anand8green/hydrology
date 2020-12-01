
export default function VideoComp({ video_title, video_subtitle }) {

    let title = video_title.split(',')

    return (
        <div className="VideoComp">
            <div className="VideoContent">
                <h1> <span>{title[0]},</span>{title[1]}</h1>
                <p>{video_subtitle}</p>
                <div className="VideoBox">
                    [animatable infographic here]
                </div>
            </div>

        </div>
    )
}
