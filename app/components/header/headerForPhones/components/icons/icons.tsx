'use client';
import { CSSProperties } from "react";
import Options from "./optionsButton/option";
import Search from "./searchButton/search";

const Icons = () => {

    const style: CSSProperties = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    return(
        <div style={style}>
            <Search/>
            <Options/>
        </div>
    )
}
export default Icons;