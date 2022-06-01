import './RedditPost.css'

export default function RedditPost() {
    return (
        <div className='card undefined'>
            <div className='post-wrapper'>
                <div className='post-votes-container'>
                    buttons
                </div>
                <div className='post-container'>
                    <h3 className='post-title'>I am a title</h3>
                    <div className='post-image-container'>
                        <img src="../../images/reddit.png" />
                    </div>
                    <div className='post-details'>
                        <span className='author-details'>
                            
                            <span className='author-username'>pseudo</span>
                        </span>
                        <span>timestamp</span>
                        <span className='post-comments-container'>
                            <button type="button" className="icon-action-button false" aria-label="Show Comments">Comments</button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}