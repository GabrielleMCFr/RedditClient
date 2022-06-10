// li of each subreddit I want to put there.
import React  from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm, setSelectedSubreddit } from '../../features/redditPosts/redditPostsSlice';

export default function Subreddit({subreddit}) {
    const dispatch = useDispatch();
    const subredditChangeHandler = () => {
        // clear search term
        dispatch(setSearchTerm(''));
        dispatch(setSelectedSubreddit(subreddit.url));
        // same than with subreddit.display_name_prefixed

    }

    return (
        <button type="button" onClick={subredditChangeHandler}> 
        <img className='subreddit-icon'
        src= {subreddit.icon_img ? subreddit.icon_img : require("../../images/reddit-logo.png")}
        alt=""/>
        {subreddit.display_name}</button>
    )
}