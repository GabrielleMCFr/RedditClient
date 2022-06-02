// li of each subreddit I want to put there.
import React  from 'react';

export default function Subreddit({subreddit}) {
    return (
        <button type="button"> 
        <img className='subreddit-icon'
        src= {subreddit.icon_img ? subreddit.icon_img : require("../../images/reddit.png")}
        />
        {subreddit.display_name}</button>
    )
}