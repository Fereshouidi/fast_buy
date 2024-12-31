'use client';
import { SearchIconContext } from "@/app/contexts/searchIconConext";
import SearchIcon_ from "@/app/svg/icons/search_";
import { CSSProperties } from "react";

const Search = () => {


    const styleSearchIcon:CSSProperties = {
        width: 'var(--primary-width)',
        height: 'var(--primary-height)',
        borderRadius: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        backgroundColor: 'red',
        // color: sideBarContext.sideBarExist? `${companyInformation?.primaryColor}`: 'var(--black)',
        // backgroundColor: optionIconColor,
        // color: 'var(--black)',
        // border: 'none',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        // cursor: "pointer"
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