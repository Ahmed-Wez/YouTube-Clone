import React from "react";

export default function Tag({ name }) {
    return (
       <div className="tag-container">
            <p className="tag-txt">{name}</p>
       </div>
    )
}