"use client";
import SearchIcon from "@/app/svg/icons/search";
import React, { CSSProperties, useState } from 'react';


const SearchBar = () => {

    const [focus, setFocus] = useState(false);

    return(
        <>
            <div style={style} > 
                <input 
                    type="text" 
                    placeholder="search ..." 
                    className="primary-border" 
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                    style={
                        focus?
                        inputStyleOnFocus
                        : inputStyle
                    } 
                />
                <SearchIcon/>
            </div>
        </>
    )
}
export default  SearchBar;

const style:CSSProperties = {
    backgroundColor: 'transparent',
    width: '50%',
    height: 'var(--primary-height)',
    position: 'relative',
    padding: '0',
}

const inputStyle:CSSProperties = {
    backgroundColor: 'var(--almost-white)',
    width: '100%',
    height: '100%',
    padding: '0 20px',
    boxSizing: 'border-box',
}

const inputStyleOnFocus:CSSProperties = {
    ...inputStyle,
    outline: 'none',
}