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
      <main>
      <RedditPostsList />
      <div id="subreddits-sidebar">
        <SubredditsList />
      </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
