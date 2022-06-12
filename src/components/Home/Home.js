import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import RedditPostsList from "../RedditPostsList/RedditPostsList";
import SubredditsList from "../SubredditsList/SubredditsList";


export default function Home() {
    return (
        <div className="App">
          <Header />
          <div className='redditposts-main'>
          <RedditPostsList />
          </div>
          <div id="subreddits-sidebar">
            <SubredditsList />
          </div>s
          <Footer />
        </div>
    )
}