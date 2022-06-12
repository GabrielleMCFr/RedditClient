// li of each subreddit I want to put there.
import React  from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSearchTerm, setSelectedSubreddit } from '../../features/redditPosts/redditPostsSlice';
//import { useHistory } from "react-router-dom";


export default function Subreddit({subreddit}) {
    const dispatch = useDispatch();
    //let history = useHistory()
    const subredditChangeHandler = () => {
        // clear search term
        dispatch(setSearchTerm(''));
        dispatch(setSelectedSubreddit(subreddit.url));
        //history.push(`/subreddit${subreddit.display_name_prefixed}`)
        // same than with subreddit.display_name_prefixed
        
    }

    return (
        <Link to={`subreddit${subreddit.url}`}>
        <button type="button" onClick={subredditChangeHandler}> 
        <img className='subreddit-icon'
        src= {subreddit.icon_img ? subreddit.icon_img : require("../../images/reddit-logo.png")}
        alt=""/>
        {subreddit.display_name}</button>
        </Link>
    )
}