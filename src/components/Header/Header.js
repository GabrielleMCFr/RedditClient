import React  from 'react';
import SearchBar from "../SearchBar/SearchBar";
import "./Header.css";

export default function Header() {
    return (
        <header>
            <div className="logo">
                <h1><span>Mini</span> Reddit</h1>
            </div>
            
            <SearchBar />
        </header>
    )
}