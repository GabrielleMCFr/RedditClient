// react component of the container of the subreddits 
import React, { useEffect } from 'react';
import "./SubredditsList.css"
import Subreddit from "../SubredditCard/Subreddit";
import { useDispatch, useSelector } from 'react-redux';
import { selectSubreddits, isLoading, loadSubreddits } from '../../features/subreddits/subredditsSlice';
import { selectSubreddit } from '../../features/redditPosts/redditPostsSlice';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function SubredditsList() {
    const dispatch = useDispatch();
    const allSubreddits = useSelector(selectSubreddits);
    const subredditsAreLoading = useSelector(isLoading);

   
    useEffect(() => {
        dispatch(loadSubreddits());
      }, [dispatch]);
    

    const actualSubreddit = useSelector(selectSubreddit);
    const rows = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
   

    return (
            <div className="card subreddit-card">
                <h2> Subreddits</h2>
                <ul className="subreddits-list">
                    {
                        subredditsAreLoading ? 
                        rows?.map((row) => {
                            return <li key={row} className="loading-item"><Skeleton height={55}/></li>
                        })
                       : allSubreddits?.map((subreddit) => {
                            return <li key={subreddit.id} className={actualSubreddit===subreddit.url ? 'selected-subreddit' : ''}><Subreddit subreddit={subreddit}/></li>
                        })
                    }
                </ul>
            </div>
    )
}