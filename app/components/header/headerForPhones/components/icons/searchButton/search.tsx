'use client';
import { SearchIconContext } from "@/app/contexts/searchIconConext";
import SearchIcon_ from "@/app/svg/icons/search_";
import { CSSProperties, useContext } from "react";

const Search = () => {


    const styleSearchIcon:CSSProperties = {
        color: 'var(--black)',
        border: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: "pointer"
    }
    
    return(
        <div>
            <SearchIconContext.Provider value={styleSearchIcon}>
                <SearchIcon_ />
            </SearchIconContext.Provider>
        </div>
    )
}
export default Search;