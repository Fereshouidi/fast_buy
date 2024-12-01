'use client';

import { CSSProperties } from "react";

const BulletinBoard = () => {

    const style:CSSProperties = {
        width: '100%',
        maxHeight: '400px',
        display: 'flex',
        alignItems: "center",
        justifyContent: 'center',
    }
    const styleIMG:CSSProperties = {
        width: '100%',
        height: '100%',
        objectFit: 'contain'
    }
    return(
        <div style={style}>
            <img style={styleIMG} 
                src="https://i.ytimg.com/vi/qBj4UPUIivQ/maxresdefault.jpg" 
                alt="Bulletin Board" 
            />
        </div>
    )
}
export default BulletinBoard