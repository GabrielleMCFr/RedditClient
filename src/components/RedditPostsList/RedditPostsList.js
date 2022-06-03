import React, { useEffect } from 'react';
import RedditPost from "../RedditPost/RedditPost";
import { useDispatch, useSelector } from 'react-redux';
import { isLoading, selectFilteredPosts } from '../../features/redditPosts/redditPostsSlice';


// react component acting as the container of the reddit posts.
export default function RedditPostsList() {
    const dispatch = useDispatch();
    const posts = useSelector(selectFilteredPosts);
    const postsAreLoading = useSelector(isLoading);

    /*
    useEffect(() => {
        dispatch(loadRedditsPosts);
      }, [dispatch]);
    */
      console.log(posts)
      if (postsAreLoading) {
        return <div>loading state</div>;
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