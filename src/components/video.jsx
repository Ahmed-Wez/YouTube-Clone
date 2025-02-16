import React from "react";
import { Link } from "react-router-dom";

export default function video({ videoThumbnail, videoTitle, videoTime, videoDate, videoViews, channelImage, channelName, channelVerified }) {
    return (
        <Link to="/video" className="video-container">
            <div className="video-image-container">
                <img 
                src={videoThumbnail}
                alt={videoTitle}
                className="video-image" />
                <div className="video-time">
                    <p>{videoTime}</p>
                </div>
            </div>
            <div className="video-info">
                <div className="channel-image-container">
                    <img src={channelImage} 
                    alt={channelName}
                    className="channel-image" />
                </div>
                <div className="video-title-channel-name-statistics">
                    <div className="video-title">
                        <p>{videoTitle}</p>
                    </div>
                    <div className="channel-name">
                        <p>{channelName}</p>
                        {channelVerified ? <span className="material-symbols-outlined">check_circle</span>: null}
                    </div>
                    <div className="video-statistics">
                        <div className="video-views">
                            <p>{videoViews} views</p>
                        </div>
                        <span></span>
                        <div className="video-upload-date">
                            <p>{videoDate}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}