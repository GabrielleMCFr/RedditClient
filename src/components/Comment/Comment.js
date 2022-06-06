import React from "react";
import { formatTimestamp } from "../../util/helpers";
import './Comment.css';

export default function Comment() {

    //let timestamp = formatTimestamp(comment.created_utc)
    return (
        <div className="comment">
            <div className="comment-metadata">
            <p className="comment-author">author</p>
            <p className="comment-created-time">time</p>
            </div>
            <p>I am the comment</p>
        </div>
    )
}