import React from "react";

export default function RedditPostsAreLoading() {
    return (
        <div className='card undefined'>
            <div className='post-wrapper'>
                <div className='post-votes-container'>
                    <div className="post-vote-value-loading"></div>
                </div>
                <div className='post-container'>
                    <h3 className='post-title '></h3>
                    <div className='post-image-container'>
                       <img src={require("../../images/load.gif")} className="post-image"/>   
                    </div>
                    <div className='post-details'>        
                    </div>  
                </div>
            </div>
        </div>
    )
}
