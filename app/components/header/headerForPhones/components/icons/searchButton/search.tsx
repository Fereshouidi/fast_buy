'use client';
//import { SearchIconContext } from "@/app/contexts/searchIconConext";
import SearchIcon_ from "@/app/svg/icons/search_";
import { CSSProperties } from "react";

const Search = () => {


    const style: CSSProperties = {
        width: 'var(--primary-width)',
        height: 'var(--primary-height)',
        borderRadius: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        color: 'var(--black)',
       // backgroundColor: 'red',
        
        padding: '10px'
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
        <div style={style}>
            {/* <SearchIconContext.Provider value={styleSearchIcon}> */}
                <SearchIcon_ />
            {/* </SearchIconContext.Provider> */}
        </div>
    )
}
export default Search;