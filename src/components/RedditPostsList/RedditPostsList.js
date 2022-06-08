import React, { useEffect } from 'react';
import RedditPost from "../RedditPost/RedditPost";
import { useDispatch, useSelector } from 'react-redux';
import { isLoading, selectFilteredPosts, selectSubreddit, loadRedditPosts } from '../../features/redditPosts/redditPostsSlice';
import RedditPostsAreLoading from '../RedditPost/RedditPostsAreLoading';



// react component acting as the container of the reddit posts.
export default function RedditPostsList() {
    const dispatch = useDispatch();
    const posts = useSelector(selectFilteredPosts);
    const postsAreLoading = useSelector(isLoading);
    let actualSubreddit = useSelector(selectSubreddit)
    
    useEffect(() => {
        dispatch(loadRedditPosts(actualSubreddit));
      }, [dispatch, actualSubreddit]);

    
      if (postsAreLoading) {
        return (
            <div>
                <RedditPostsAreLoading />
                <RedditPostsAreLoading />
                <RedditPostsAreLoading />
            </div>
        );
    }

    else if (!posts || posts.length === 0) {
        return <div>No post matches your query</div>
    }

    
    return (
        <div className="main-content" id="main-content">
        {
            
            posts.map((post) => {
                return <RedditPost key={post.id} post={post}/>
            })
        }
        </div>
    )
}