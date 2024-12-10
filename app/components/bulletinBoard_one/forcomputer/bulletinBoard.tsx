'use client';

import { CSSProperties, useEffect, useState } from "react";
import {getBulletinBoard} from "@/app/crud";
import { useRouter } from "next/navigation";
import LoadingIcon from "@/app/svg/icons/loading/loading";

const BulletinBoard = () => {

    const router = useRouter()
    type bulletinBoardParams = {
        images: string[],
        changingTime: number,
        link: string,
    }
    const [bulletinBoard, setBulletinBoard] = useState<bulletinBoardParams | null>(null);
    const [activeIndex, setActiveIndex] = useState<number>(0);


    useEffect(() => {
        const fetchData = async () => {
            const data = await getBulletinBoard();
            setBulletinBoard(data);
            setActiveIndex(0);
    
            if (data && data.images.length > 0) {
                let x = 0;
                const interval = setInterval(() => {
                    x += 1;
                    if (x < data.images.length - 1) {
                        setActiveIndex( x);
                    } else {
                        x = 0;
                        setActiveIndex(x );
                        
                    }
                    
                }, data.changingTime * 1000);
                if(data.changingTime == 0){
                    clearInterval(interval);
                }
    
            }
        };
    
        fetchData();
    }, []);
    
    const handleClick = () => {
        router.push(bulletinBoard && bulletinBoard.link ? bulletinBoard.link : '')
    }

    const style:CSSProperties = {
        width: '100%',
        height: '400px',
        display: 'flex',
        alignItems: "center",
        justifyContent: 'center',
        marginBottom: 'var(--small-margin)',
        cursor: "pointer",
    }
    const styleIMG:CSSProperties = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'flex',
        alignItems: "center",
        justifyContent: 'center',
    }
    return(
        <div style={style} onClick={handleClick}>
            {!bulletinBoard ?
                <LoadingIcon/> 
            : <img style={styleIMG} 
                src={bulletinBoard.images?.[activeIndex] }
            />
            }
            
        </div>
    )
}
export default BulletinBoard