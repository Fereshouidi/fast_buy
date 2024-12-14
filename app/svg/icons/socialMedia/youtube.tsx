'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { CSSProperties } from "react";

const YouTubeIcon = () => {
    const style: CSSProperties = {
        borderRadius: '50%',
        padding: '0',
        fontSize: 'calc(var(--primary-size)*2)',
        color: 'red', 
    };

    return (
        <FontAwesomeIcon style={style} icon={faYoutube} />
    );
};

export default YouTubeIcon;