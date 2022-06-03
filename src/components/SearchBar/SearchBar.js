import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSearchTerm, setSearchTerm } from '../../features/redditPosts/redditPostsSlice';
import './SearchBar.css';

export default function SearchBar() {
    const dispatch = useDispatch();
    // const research = useSelector(selectSearchTerm);
    const [newSearchTerm, setNewSearchTerm] = useState('')

    const onSearchSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(setSearchTerm(newSearchTerm));
      };

    return (
        <form className="search" onSubmit={onSearchSubmitHandler}>
            <input name="searchterm" type="text" placeholder="What are you looking for ?" aria-label="Search posts" onChange={(e) => setNewSearchTerm(e.currentTarget.value)}/>
            <button type="submit" aria-label="search">🔍</button>
        </form>
    )
}