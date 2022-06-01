// react component of the container of the subreddits 
import "./SubredditsList.css"
import Subreddit from "../SubredditCard/Subreddit";

export default function SubredditsList() {
    return (
            <div className="card subreddit-card">
                <h2> Subreddits</h2>
                <ul className="subreddits-list">
                    <li key="1"><Subreddit/></li>
                    <li key="2"><Subreddit/></li>
                    <li key="3"><Subreddit/></li>
                </ul>
            </div>
    )
}