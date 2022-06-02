import React, { useEffect } from 'react';
import RedditPost from "../RedditPost/RedditPost";
import { useDispatch, useSelector } from 'react-redux';
import { isLoading, selectAllPosts } from '../../features/redditPosts/redditPostsSlice';


// react component acting as the container of the reddit posts.
export default function RedditPostsList() {
    const dispatch = useDispatch();
    const posts = useSelector(selectAllPosts);
    const postsAreLoading = useSelector(isLoading);

    /*
    useEffect(() => {
        dispatch(loadRedditsPosts);
      }, [dispatch]);
    */
    
      if (postsAreLoading) {
        return <div>loading state</div>;
    }


    return (
        <div className="main-content" id="main-content">
        {
            posts?.map((post) => {
                return <RedditPost post={post}/>
            })
        }
        </div>
    )
}