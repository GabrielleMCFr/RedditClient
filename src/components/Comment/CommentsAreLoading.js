import React from "react";

export default function CommentsAreLoading() {
    return (
        <div className="comment">
            <div className="comment-metadata">
            <p className="comment-author"></p>
            <p className="comment-created-time"></p>
            
            </div>
            <div className="spin">
            <img src={require("../../images/ajax-loader.gif")} />
            </div>
        </div>
    )
}