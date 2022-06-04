// li of each subreddit I want to put there.
import React  from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedSubreddit } from '../../features/redditPosts/redditPostsSlice';

export default function Subreddit({subreddit}) {
    const dispatch = useDispatch();
    const subredditChangeHandler = () => {
        dispatch(setSelectedSubreddit(subreddit.url))
    }

    return (
        <button type="button" onClick={subredditChangeHandler}> 
        <img className='subreddit-icon'
        src= {subreddit.icon_img ? subreddit.icon_img : require("../../images/reddit.png")}
        />
        {subreddit.display_name}</button>
    )
}