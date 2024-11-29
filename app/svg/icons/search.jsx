import React, { CSSProperties, useRef, useState } from 'react';
const SearchIcon = () => {

    const [hover, setHover] = useState(false);


    return(
        <svg 
            className="search-icon primary-border" 
            style={hover? styleHover: style} 
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
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
export default SearchIcon;

const style = {
    position: 'absolute',
    right: '5px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: 'var(--white)',
    backgroundColor: 'var(--black)',
    width: 'calc(var(--primary-height) - 20px)',
    height: 'calc(var(--primary-height) - 20px)',
    padding: '5px 7px 5px 3px',
    fontSize: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}

const styleHover = {
    ... style,
    backgroundColor: 'var(--primary-color)',
}

