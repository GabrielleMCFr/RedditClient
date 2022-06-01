import SearchBar from "../SearchBar/SearchBar"
import "./Header.css"


export default function Header() {
    return (
        <header>
            <div className="logo">
                <h1>Mini Reddit</h1>
            </div>
            
            <SearchBar />
        </header>
    )
}