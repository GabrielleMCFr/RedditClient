import React, { useEffect } from 'react';
import RedditPost from "../RedditPost/RedditPost";
import { useDispatch, useSelector } from 'react-redux';
import { isLoading, selectFilteredPosts, selectSubreddit, loadRedditPosts } from '../../features/redditPosts/redditPostsSlice';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


export default function RedditPostsList() {
    const dispatch = useDispatch();
    const posts = useSelector(selectFilteredPosts);
    const postsAreLoading = useSelector(isLoading);
    let actualSubreddit = useSelector(selectSubreddit)
    
    useEffect(() => {
        dispatch(loadRedditPosts(actualSubreddit));
      }, [dispatch, actualSubreddit]);

    const rows = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    if (!postsAreLoading && posts.length === 0) {
        return <div className='main-content'>No post matches your query</div>
    }

    
    return (
        <div className="main-content" id="main-content">
        {   
            postsAreLoading ?
            rows?.map((row) => {
                return (
                    <div className='card undefined'>
                        <div className='post-wrapper'>
                            <div className='post-votes-container'>
                            <button type="button" className="icon-action-button up-vote false" aria-label='Up vote'>
                            <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg"><path d="M12 21c-1.654 0-3-1.346-3-3v-4.764c-1.143 1.024-3.025.979-4.121-.115-1.17-1.169-1.17-3.073 0-4.242l7.121-7.121 7.121 7.121c1.17 1.169 1.17 3.073 0 4.242-1.094 1.095-2.979 1.14-4.121.115v4.764c0 1.654-1.346 3-3 3zm-1-12.586v9.586c0 .551.448 1 1 1s1-.449 1-1v-9.586l3.293 3.293c.379.378 1.035.378 1.414 0 .391-.391.391-1.023 0-1.414l-5.707-5.707-5.707 5.707c-.391.391-.391 1.023 0 1.414.379.378 1.035.378 1.414 0l3.293-3.293z"/></svg>
                            </button>
                                <p className='post-votes-value'><Skeleton circle/></p>
                                <button type="button" className="icon-action-button down-vote false" aria-label='Down vote' >
                                <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg"><path d="M12 21.312l-7.121-7.121c-1.17-1.17-1.17-3.073 0-4.242 1.094-1.094 2.978-1.138 4.121-.115v-4.834c0-1.654 1.346-3 3-3s3 1.346 3 3v4.834c1.143-1.023 3.027-.979 4.121.115 1.17 1.169 1.17 3.072 0 4.242l-7.121 7.121zm-5-10.242c-.268 0-.518.104-.707.293-.391.39-.391 1.023 0 1.414l5.707 5.707 5.707-5.707c.391-.391.391-1.024 0-1.414-.379-.379-1.035-.379-1.414 0l-3.293 3.293v-9.656c0-.551-.448-1-1-1s-1 .449-1 1v9.656l-3.293-3.293c-.189-.189-.439-.293-.707-.293z"/></svg>
                                </button>
                            </div>
                            <div className='post-container'>
                                <h3 className='post-title '><Skeleton containerClassName='post-title'></Skeleton></h3>
                                <div className='post-image-container'>
                                    <Skeleton containerClassName='post-image-container' height={100}/>

                                </div>
                                
                                <div className='post-details'>
                                    <span className='author-details'>
                                        
                                        <span className='author-username'><Skeleton
                            height="100%" width={30}/></span>
                                    </span>
                                    <span><Skeleton width={40}/></span>
                                    <span className='post-comments-container'>
                                        <button type="button" className="icon-action-button false" aria-label="Show Comments"
                                       ><svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.5 11.5H7.51M11.5 11.5H11.51M15.5 11.5H15.51M3.00003 11.5C2.99659 12.8199 3.30496 14.1219 3.90003 15.3C4.6056 16.7118 5.69028 17.8992 7.03258 18.7293C8.37488 19.5594 9.92179 19.9994 11.5 20C12.8199 20.0035 14.1219 19.6951 15.3 19.1L21 21L19.1 15.3C19.6951 14.1219 20.0035 12.8199 20 11.5C19.9994 9.92179 19.5594 8.37488 18.7293 7.03258C17.8992 5.69028 16.7118 4.6056 15.3 3.90003C14.1219 3.30496 12.8199 2.99659 11.5 3.00003H11C8.91568 3.11502 6.94699 3.99479 5.47089 5.47089C3.99479 6.94699 3.11502 8.91568 3.00003 11V11.5Z" stroke="#001A72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg> <Skeleton width={10}/></button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })

            :
            posts?.map((post) => {
                return <RedditPost key={post.id} post={post}/>
            })
        }
        </div>
    )
}