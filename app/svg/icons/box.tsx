'use client';
import { faBoxArchive } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSProperties } from "react";

const BoxIcon = () => {

    const style:CSSProperties ={
        color: 'var(--primary-color)',
        margin: 'calc( var(--small-margin)*1.2)',
        fontSize: 'var(--primary-size)'
    }
    return(
        <div style={style}>
            <FontAwesomeIcon icon={faBoxArchive}/>
        </div>
    )
}
export default BoxIcon;