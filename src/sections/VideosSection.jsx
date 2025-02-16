import React from "react";

import Video from "../components/video";
import dataAPI from "../data";

export default function VideosSection() {
    return (
        <>
            {dataAPI.map((data) => (
                <Video 
                    key={data.id}
                    videoThumbnail={data.video.thumbnail}
                    videoTitle={data.video.title}
                    videoTime={data.video.time}
                    videoDate={data.video.dateApproximated}
                    videoViews={data.video.viewsApproximated}
                    channelImage={data.video.channel.logo}
                    channelName={data.video.channel.name}
                    channelVerified={data.video.channel.verified}
                />
            ))} 
        </>
        
    )
}