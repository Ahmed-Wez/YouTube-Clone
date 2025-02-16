import React from "react";

import VideosSection from "../sections/VideosSection";
// import TagsSection from "../sections/TagsSection";

export default function Home({ setIsVideoPage }) {
    setIsVideoPage(false);

    return (
        <div className="home-page">
            <VideosSection />
            {/* <TagsSection /> */}
        </div>
    )
}