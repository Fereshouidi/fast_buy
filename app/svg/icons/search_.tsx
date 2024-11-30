'use client';
import { SearchIconContext } from "@/app/contexts/searchIconConext";
import { useContext } from "react";


const SearchIcon_ = () => {

    const searchIconContext = useContext(SearchIconContext);

    return(
        <svg  style={searchIconContext}
            className="search-icon primary-border" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 18 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round">
            <circle cx="10" cy="10" r="7" />
            <line x1="15" y1="15" x2="22" y2="22" />
        </svg>
    )
}
export default SearchIcon_;