import React  from 'react';
import './RedditPost.css';

export default function RedditPost({post}) {
    return (
        <div className='card undefined'>
            <div className='post-wrapper'>
                <div className='post-votes-container'>
                <button type="button" className="icon-action-button up-vote false" aria-label='Up vote'>⬆</button>
                    <p className='post-votes-value'>{post.score}</p>
                    <button type="button" className="icon-action-button down-vote false" aria-label='Down vote'>⬇</button>
                </div>
                <div className='post-container'>
                    <h3 className='post-title'>{post.title}</h3>
                    <div className='post-image-container'>
                        {post.url && <img src={post.url} className="post-image"/>}
                        
                    </div>
                    <div className='post-details'>
                        <span className='author-details'>
                            
                            <span className='author-username'>{post.author}</span>
                        </span>
                        <span>timestamp</span>
                        <span className='post-comments-container'>
                            <button type="button" className="icon-action-button false" aria-label="Show Comments">{post.num_comments}</button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}