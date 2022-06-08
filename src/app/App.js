import React from 'react';
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header';
import RedditPostsList from '../components/RedditPostsList/RedditPostsList';
import SubredditsList from '../components/SubredditsList/SubredditsList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='redditposts-main'>
      <RedditPostsList />
      </div>
      <div id="subreddits-sidebar">
        <SubredditsList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
