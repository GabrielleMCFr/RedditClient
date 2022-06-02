import React  from 'react';
import './SearchBar.css';

export default function SearchBar() {
    return (
        <form className="search" >
            <input type="text" placeholder="What are you looking for ?" aria-label="Search posts"/>
            <button type="submit" aria-label="search">🔍</button>
        </form>
    )
}