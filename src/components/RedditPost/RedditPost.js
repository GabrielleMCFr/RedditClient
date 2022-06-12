import React, { useState }  from 'react';
import { formatTimestamp } from '../../util/helpers.js';
import CommentsList from '../CommentsList/CommentsList.js';
import './RedditPost.css';

export default function RedditPost({post}) {
    const [upIsActive, setUpActive] = useState(false);
    const [downIsActive, setDownActive] = useState(false);
    const [showComments, setShowComments] = useState(false);
    let isImage = false;
    let isVideo = false;
    
    // check for valid image PB WITH RENDERED SIZE EST FLOU
    if (post.url.includes('.jpg') || post.url.includes('.png')) {
        isImage = true;
    }

    if (post.is_video) {
        isVideo = true;
    }

    const toggleComments = () => {
        setShowComments(!showComments)   
    }
    
    let timestamp = formatTimestamp(post.created_utc)

    const changeDown = () => {
        if (upIsActive) {
            setUpActive(!upIsActive)
        }
        setDownActive(!downIsActive)   
         }

    const changeUp = () => {
        if (downIsActive) {
            setDownActive(!downIsActive)
        }
        setUpActive(!upIsActive) 
        
    }
    // CORRIGER QUAND LES IMGS SONT DES VIDEOS OU GALLERY IMG CEST LA MERDE DOIT Y AVOIR UN TRUC.
    // if a vote is active : 
    if (!upIsActive && !downIsActive) {
        return (
            <div className='card undefined'>
                <div className='post-wrapper'>
                    <div className='post-votes-container'>
                    <button type="button" className="icon-action-button up-vote false" aria-label='Up vote' onClick={changeUp}>
                    <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg"><path d="M12 21c-1.654 0-3-1.346-3-3v-4.764c-1.143 1.024-3.025.979-4.121-.115-1.17-1.169-1.17-3.073 0-4.242l7.121-7.121 7.121 7.121c1.17 1.169 1.17 3.073 0 4.242-1.094 1.095-2.979 1.14-4.121.115v4.764c0 1.654-1.346 3-3 3zm-1-12.586v9.586c0 .551.448 1 1 1s1-.449 1-1v-9.586l3.293 3.293c.379.378 1.035.378 1.414 0 .391-.391.391-1.023 0-1.414l-5.707-5.707-5.707 5.707c-.391.391-.391 1.023 0 1.414.379.378 1.035.378 1.414 0l3.293-3.293z"/></svg>
                    </button>
                        <p className='post-votes-value'>{post.score}</p>
                        <button type="button" className="icon-action-button down-vote false" aria-label='Down vote' onClick={changeDown}>
                        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg"><path d="M12 21.312l-7.121-7.121c-1.17-1.17-1.17-3.073 0-4.242 1.094-1.094 2.978-1.138 4.121-.115v-4.834c0-1.654 1.346-3 3-3s3 1.346 3 3v4.834c1.143-1.023 3.027-.979 4.121.115 1.17 1.169 1.17 3.072 0 4.242l-7.121 7.121zm-5-10.242c-.268 0-.518.104-.707.293-.391.39-.391 1.023 0 1.414l5.707 5.707 5.707-5.707c.391-.391.391-1.024 0-1.414-.379-.379-1.035-.379-1.414 0l-3.293 3.293v-9.656c0-.551-.448-1-1-1s-1 .449-1 1v9.656l-3.293-3.293c-.189-.189-.439-.293-.707-.293z"/></svg>
                        </button>
                    </div>
                    <div className='post-container'>
                        <h3 className='post-title '>{post.title}</h3>
                        {isImage && <div className='post-image-container'>
                            {post.url && <img src={post.url} className="post-image" alt=""/>}
                            
                        </div>}
                        

                        {isVideo && <div className='post-image-container'>
                        {post.secure_media.reddit_video.fallback_url && <video src={post.secure_media.reddit_video.fallback_url} controls className="post-image"></video>}
                        
                        </div>}
                        
                        <div className='post-details'>
                            <span className='author-details'>
                                
                                <span className='author-username'>{post.author}</span>
                            </span>
                            <span>{timestamp}</span>
                            <span className='post-comments-container'>
                                <button type="button" className={showComments ? "icon-action-button showing-comments" : "icon-action-button false"} aria-label="Show Comments"
                                onClick={toggleComments}><svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.5 11.5H7.51M11.5 11.5H11.51M15.5 11.5H15.51M3.00003 11.5C2.99659 12.8199 3.30496 14.1219 3.90003 15.3C4.6056 16.7118 5.69028 17.8992 7.03258 18.7293C8.37488 19.5594 9.92179 19.9994 11.5 20C12.8199 20.0035 14.1219 19.6951 15.3 19.1L21 21L19.1 15.3C19.6951 14.1219 20.0035 12.8199 20 11.5C19.9994 9.92179 19.5594 8.37488 18.7293 7.03258C17.8992 5.69028 16.7118 4.6056 15.3 3.90003C14.1219 3.30496 12.8199 2.99659 11.5 3.00003H11C8.91568 3.11502 6.94699 3.99479 5.47089 5.47089C3.99479 6.94699 3.11502 8.91568 3.00003 11V11.5Z" stroke="#001A72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg> {post.num_comments}</button>
                            </span>
                        </div>
                        {showComments && <CommentsList permalink={post.permalink} id={post.id} num_comments={post.num_comments}/> }
                    </div>
                </div>
            </div>
        )
    }

    // if no vote is active
    else {
        return (
            <div className='card undefined'>
                <div className='post-wrapper'>
                    <div className='post-votes-container'>
                    <button type="button" className={upIsActive?  "icon-action-button up-vote active" : "icon-action-button up-vote false"} aria-label='Up vote' onClick={changeUp}>
                    <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg"><path d="M12 21c-1.654 0-3-1.346-3-3v-4.764c-1.143 1.024-3.025.979-4.121-.115-1.17-1.169-1.17-3.073 0-4.242l7.121-7.121 7.121 7.121c1.17 1.169 1.17 3.073 0 4.242-1.094 1.095-2.979 1.14-4.121.115v4.764c0 1.654-1.346 3-3 3zm-1-12.586v9.586c0 .551.448 1 1 1s1-.449 1-1v-9.586l3.293 3.293c.379.378 1.035.378 1.414 0 .391-.391.391-1.023 0-1.414l-5.707-5.707-5.707 5.707c-.391.391-.391 1.023 0 1.414.379.378 1.035.378 1.414 0l3.293-3.293z"/></svg>
                    </button>
                        <p className={upIsActive ? 'post-votes-value up-vote' : 'post-votes-value down-vote'}>{post.score}</p>
                        <button type="button" className={downIsActive ?  "icon-action-button down-vote active" : "icon-action-button down-vote false"} aria-label='Down vote' onClick={changeDown}>
                            <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg"><path d="M12 21.312l-7.121-7.121c-1.17-1.17-1.17-3.073 0-4.242 1.094-1.094 2.978-1.138 4.121-.115v-4.834c0-1.654 1.346-3 3-3s3 1.346 3 3v4.834c1.143-1.023 3.027-.979 4.121.115 1.17 1.169 1.17 3.072 0 4.242l-7.121 7.121zm-5-10.242c-.268 0-.518.104-.707.293-.391.39-.391 1.023 0 1.414l5.707 5.707 5.707-5.707c.391-.391.391-1.024 0-1.414-.379-.379-1.035-.379-1.414 0l-3.293 3.293v-9.656c0-.551-.448-1-1-1s-1 .449-1 1v9.656l-3.293-3.293c-.189-.189-.439-.293-.707-.293z"/></svg>
                        </button>
                    </div>
                    <div className='post-container'>
                        <h3 className='post-title '>{post.title}</h3>
                        {isImage && <div className='post-image-container'>
                            {post.url && <img src={post.url} className="post-image" alt=""/>}
                            
                        </div>}
                        <div className='post-details'>
                            <span className='author-details'>
                                
                                <span className='author-username'>{post.author}</span>
                            </span>
                            <span>{timestamp}</span>
                            <span className='post-comments-container'>
                                <button type="button" className={showComments ? "icon-action-button showing-comments" : "icon-action-button false"} aria-label="Show Comments" onClick={toggleComments}><svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.5 11.5H7.51M11.5 11.5H11.51M15.5 11.5H15.51M3.00003 11.5C2.99659 12.8199 3.30496 14.1219 3.90003 15.3C4.6056 16.7118 5.69028 17.8992 7.03258 18.7293C8.37488 19.5594 9.92179 19.9994 11.5 20C12.8199 20.0035 14.1219 19.6951 15.3 19.1L21 21L19.1 15.3C19.6951 14.1219 20.0035 12.8199 20 11.5C19.9994 9.92179 19.5594 8.37488 18.7293 7.03258C17.8992 5.69028 16.7118 4.6056 15.3 3.90003C14.1219 3.30496 12.8199 2.99659 11.5 3.00003H11C8.91568 3.11502 6.94699 3.99479 5.47089 5.47089C3.99479 6.94699 3.11502 8.91568 3.00003 11V11.5Z" stroke="#001A72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg> {post.num_comments}</button>
                            </span>   
                        </div>
                        {showComments && <CommentsList permalink={post.permalink} id={post.id} num_comments={post.num_comments}/> }
                    </div>
                </div>
            </div>
        )
    }

   
}