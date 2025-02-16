import React from "react";

export default function Video({ setIsVideoPage }) {
    setIsVideoPage(true);

  return (
    <div className="video-page">
        <div className="left-side-container video-comments-container">
            <div className="video-container">
                <iframe width="966px" height="543px" src="https://www.youtube.com/embed/TBOmUuG-9BY" title="It&#39;s time to talk about these UI trends" frameborder="0" allowfullscreen></iframe>
            </div>
            <div className="video-info-container">
                <div className="video-title-container">
                    <p className="video-title">It's time to talk about these UI trends</p>
                </div>
                <div className="channel-like-dislike-share-download-more-container">
                    <div className="channel-container">
                        <div className="channel-image-container">
                            <img src="https://yt3.ggpht.com/6SUvLvQ6tJ8l6PAS3Y9OdsN7l-VVXVCsBhYqBcfvpfogaScX-3PoHVqq4mgbutsX-l-miiYgVA=s88-c-k-c0x00ffffff-no-rj" alt="Juxtopposed" />
                        </div>
                        <div className="channel-name-subscribers-container">
                            <div className="channel-name-container">
                                <p>Juxtopposed</p>
                            </div>
                            <div className="channel-subscribers-container">
                                <p>104K subscribers</p>
                            </div>
                        </div>
                        <div className="channel-join-subscribe-btns-container">
                            <div className="channel-join-container">
                                <button>Join</button>
                            </div>
                            <div className="channel-subscribe-container">
                                <button>Subscribe</button>
                            </div>
                        </div>
                    </div>
                    <div className="like-dislike-share-download-more-container">
                        <div className="like-dislike-container">
                            <div className="like-container like-dislike--share-download-container">
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" style={{pointerEvents: "none", display: "block", width: "100%", height: "100%", fill: "#f1f1f1"}}><path d="M17,4h-1H6.57C5.5,4,4.59,4.67,4.38,5.61l-1.34,6C2.77,12.85,3.82,14,5.23,14h4.23l-1.52,4.94C7.62,19.97,8.46,21,9.62,21 c0.58,0,1.14-0.24,1.52-0.65L17,14h4V4H17z M10.4,19.67C10.21,19.88,9.92,20,9.62,20c-0.26,0-0.5-0.11-0.63-0.3 c-0.07-0.1-0.15-0.26-0.09-0.47l1.52-4.94l0.4-1.29H9.46H5.23c-0.41,0-0.8-0.17-1.03-0.46c-0.12-0.15-0.25-0.4-0.18-0.72l1.34-6 C5.46,5.35,5.97,5,6.57,5H16v8.61L10.4,19.67z M20,13h-3V5h3V13z"></path></svg>
                                </div>
                                <div className="likes-number">
                                    <p>24K</p>
                                </div>
                            </div>
                            <div className="separator"></div>
                            <div className="dislike-container like-dislike--share-download-container">
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" style={{pointerEvents: "none", display: "block", width: "100%", height: "100%", fill: "#f1f1f1"}}><path d="M17,4h-1H6.57C5.5,4,4.59,4.67,4.38,5.61l-1.34,6C2.77,12.85,3.82,14,5.23,14h4.23l-1.52,4.94C7.62,19.97,8.46,21,9.62,21 c0.58,0,1.14-0.24,1.52-0.65L17,14h4V4H17z M10.4,19.67C10.21,19.88,9.92,20,9.62,20c-0.26,0-0.5-0.11-0.63-0.3 c-0.07-0.1-0.15-0.26-0.09-0.47l1.52-4.94l0.4-1.29H9.46H5.23c-0.41,0-0.8-0.17-1.03-0.46c-0.12-0.15-0.25-0.4-0.18-0.72l1.34-6 C5.46,5.35,5.97,5,6.57,5H16v8.61L10.4,19.67z M20,13h-3V5h3V13z"></path></svg>
                                </div>
                            </div>
                        </div>
                            <div className="share-container like-dislike--share-download-container">
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" style={{pointerEvents: "none", display: "block", width: "100%", height: "100%", fill: "#f1f1f1"}}><path d="M15 5.63 20.66 12 15 18.37V14h-1c-3.96 0-7.14 1-9.75 3.09 1.84-4.07 5.11-6.4 9.89-7.1l.86-.13V5.63M14 3v6C6.22 10.13 3.11 15.33 2 21c2.78-3.97 6.44-6 12-6v6l8-9-8-9z"></path></svg>
                                </div>
                                <div className="txt">
                                    <p>Share</p>
                                </div>
                            </div>
                            <div className="download-container like-dislike--share-download-container">
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" style={{pointerEvents: "none", display: "block", width: "100%", height: "100%", fill: "#f1f1f1"}}><path d="M17 18v1H6v-1h11zm-.5-6.6-.7-.7-3.8 3.7V4h-1v10.4l-3.8-3.8-.7.7 5 5 5-4.9z"></path></svg>
                                </div>
                                <div className="txt">
                                    <p>Download</p>
                                </div>
                            </div>
                            <div className="more-container">
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" style={{pointerEvents: "none", display: "block", width: "100%", height: "100%"}}><path d="M7.5 12c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zm4.5-1.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm6 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path></svg>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
