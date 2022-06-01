import RedditPost from "../RedditPost/RedditPost";


// react component acting as the container of the reddit posts.
export default function RedditPostsList() {
    return (
        <div className="main-content" id="main-content">
            <RedditPost />
            <RedditPost />
        </div>
    )
}