import React from "react";
import { formatTimestamp } from "../../util/helpers";
import './Comment.css';

export default function Comment({comment}) {
    let timestamp = ''
    if (comment.created_utc) {
        timestamp = formatTimestamp(comment.created_utc)
    }
    
    return (
        <div className="comment">
            <div className="comment-metadata">
            <p className="comment-author">{comment.author}</p>
            <p className="comment-created-time">{timestamp}</p>
            </div>
            <p>{comment.body}</p>
        </div>
    )
}