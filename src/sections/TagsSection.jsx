import React from "react";
import Tag from "../components/tag";

export default function TagsSection() {
    return (
       <div className="tag-section">
            <Tag name={"All"} />
            <Tag name={"JavaScript"} />
            <Tag name={"CSS"} />
            <Tag name={"HTML"} />
            <Tag name={"SCSS"} />
            <Tag name={"AI"} />
            <Tag name={"Mems"} />
            <Tag name={"New to you"} />
       </div>
    )
}
