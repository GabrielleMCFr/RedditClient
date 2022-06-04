// react component of the container of the subreddits 
import React from 'react';
import "./SubredditsList.css"
import Subreddit from "../SubredditCard/Subreddit";
import { useDispatch, useSelector } from 'react-redux';
import { selectSubreddits, isLoading } from '../../features/subreddits/subredditsSlice';
import { selectSubreddit } from '../../features/redditPosts/redditPostsSlice';

export default function SubredditsList() {
    //const dispatch = useDispatch();
    const allSubreddits = useSelector(selectSubreddits);
    const subredditsAreLoading = useSelector(isLoading);

    /*
    useEffect(() => {
        dispatch(loadSubreddits);
      }, [dispatch]);
    */

    const actualSubreddit = useSelector(selectSubreddit);
    
    if (subredditsAreLoading) {
        return <div>loading state</div>;
    }

    return (
            <div className="card subreddit-card">
                <h2> Subreddits</h2>
                <ul className="subreddits-list">
                    {
                        allSubreddits?.map((subreddit) => {
                            return <li key={subreddit.id} className={actualSubreddit===subreddit.url ? 'selected-subreddit' : ''}><Subreddit subreddit={subreddit}/></li>
                        })
                    }
                </ul>
            </div>
    )
}