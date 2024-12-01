'use client';
import { CSSProperties, useEffect, useRef, useState } from "react";
import Slide from "./slide/slide";

const Slides = () => {

    const list = [
        {
            tittle: 'the tittle',
            img: 'https://i.ytimg.com/vi/qBj4UPUIivQ/maxresdefault.jpg'
        },
        {
            tittle: 'the tittle',
            img: 'https://i.ytimg.com/vi/qBj4UPUIivQ/maxresdefault.jpg'
        },
        {
            tittle: 'the tittle',
            img: 'https://i.ytimg.com/vi/qBj4UPUIivQ/maxresdefault.jpg'
        },
        {
            tittle: 'the tittle',
            img: 'https://i.ytimg.com/vi/qBj4UPUIivQ/maxresdefault.jpg'
        },
        {
            tittle: 'the tittle',
            img: 'https://i.ytimg.com/vi/qBj4UPUIivQ/maxresdefault.jpg'
        },
        {
            tittle: 'the tittle',
            img: 'https://i.ytimg.com/vi/qBj4UPUIivQ/maxresdefault.jpg'
        },
        {
            tittle: 'the tittle',
            img: 'https://i.ytimg.com/vi/qBj4UPUIivQ/maxresdefault.jpg'
        },
        {
            tittle: 'the tittle',
            img: 'https://i.ytimg.com/vi/qBj4UPUIivQ/maxresdefault.jpg'
        },
        {
            tittle: 'the tittle',
            img: 'https://i.ytimg.com/vi/qBj4UPUIivQ/maxresdefault.jpg'
        },
        {
            tittle: 'the tittle',
            img: 'https://i.ytimg.com/vi/qBj4UPUIivQ/maxresdefault.jpg'
        },
        {
            tittle: 'the tittle',
            img: 'https://i.ytimg.com/vi/qBj4UPUIivQ/maxresdefault.jpg'
        },
        {
            tittle: 'the tittle',
            img: 'https://i.ytimg.com/vi/qBj4UPUIivQ/maxresdefault.jpg'
        },
        {
            tittle: 'the tittle',
            img: 'https://i.ytimg.com/vi/qBj4UPUIivQ/maxresdefault.jpg'
        }
    ]

    const slidesRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const slideWidth = 90;
    const totalSlides = list.length /3;

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex(prevIndex => {
                const nextIndex = prevIndex + 1;
                if (nextIndex >= totalSlides) {
                    return 0; 
                }
                return nextIndex;
            });
        }, 3000);

        return () => clearInterval(intervalId);
    }, []); 

    useEffect(() => {
        if (slidesRef.current != null) {
            slidesRef.current.style.transform = `translateX(-${currentIndex * slideWidth}vw)`;
        }
    }, [currentIndex]);




    const style:CSSProperties = {
        width: '100%',
        height: 'auto',
        display: 'flex',
        transition: '1.5s',
    }
    return(
        <div style={style} ref={slidesRef}> {
            list.map((product, index) => {
                return <Slide key={index} productTittle={product.tittle} productImage={product.img}/>
            })
        } </div>
    )
}
export default Slides;