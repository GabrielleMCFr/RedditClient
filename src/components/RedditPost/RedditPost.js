import React, { useEffect, useState }  from 'react';
import { useDispatch } from 'react-redux';
import { loadComments } from '../../features/Comments/CommentsSlice.js';
import { formatTimestamp } from '../../util/helpers.js';
import CommentsList from '../CommentsList/CommentsList.js';
import './RedditPost.css';

export default function RedditPost({post}) {
    const dispatch = useDispatch();
    const [upIsActive, setUpActive] = useState(false);
    const [downIsActive, setDownActive] = useState(false);
    const [showComments, setShowComments] = useState(false);
    let isImage = false;
    
    // check for valid image PB WITH RENDERED SIZE EST FLOU
    if (post.url.includes('.jpg') || post.url.includes('.png')) {
        isImage = true;
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
    if (!upIsActive && !downIsActive) {
        return (
            <div className='card undefined'>
                <div className='post-wrapper'>
                    <div className='post-votes-container'>
                    <button type="button" className="icon-action-button up-vote false" aria-label='Up vote' onClick={changeUp}>⬆</button>
                        <p className='post-votes-value'>{post.score}</p>
                        <button type="button" className="icon-action-button down-vote false" aria-label='Down vote' onClick={changeDown}>⬇</button>
                    </div>
                    <div className='post-container'>
                        <h3 className='post-title '>{post.title}</h3>
                        {isImage && <div className='post-image-container'>
                            {post.url && <img src={post.url} className="post-image"/>}
                            
                        </div>}
                        
                        <div className='post-details'>
                            <span className='author-details'>
                                
                                <span className='author-username'>{post.author}</span>
                            </span>
                            <span>{timestamp}</span>
                            <span className='post-comments-container'>
                                <button type="button" className={showComments ? "icon-action-button showing-comments" : "icon-action-button false"} aria-label="Show Comments"
                                onClick={toggleComments}>{post.num_comments}</button>
                            </span>
                        </div>
                        {showComments && <CommentsList permalink={post.permalink} id={post.id}/> }
                    </div>
                </div>
            </div>
        )
    }

    else {
        return (
            <div className='card undefined'>
                <div className='post-wrapper'>
                    <div className='post-votes-container'>
                    <button type="button" className={upIsActive?  "icon-action-button up-vote active" : "icon-action-button up-vote false"} aria-label='Up vote' onClick={changeUp}>⬆</button>
                        <p className={upIsActive ? 'post-votes-value up-vote' : 'post-votes-value down-vote'}>{post.score}</p>
                        <button type="button" className={downIsActive ?  "icon-action-button down-vote active" : "icon-action-button down-vote false"} aria-label='Down vote' onClick={changeDown}>⬇</button>
                    </div>
                    <div className='post-container'>
                        <h3 className='post-title '>{post.title}</h3>
                        <div className='post-image-container'>
                            {post.url && <img src={post.banner_img} className="post-image"/>}
                            
                        </div>
                        <div className='post-details'>
                            <span className='author-details'>
                                
                                <span className='author-username'>{post.author}</span>
                            </span>
                            <span>timestamp</span>
                            <span className='post-comments-container'>
                                <button type="button" className={showComments ? "icon-action-button showing-comments" : "icon-action-button false"} aria-label="Show Comments" onClick={toggleComments}>{post.num_comments}</button>
                            </span>   
                        </div>
                        {showComments && <CommentsList /> }
                    </div>
                </div>
            </div>
        )
    }

   
}