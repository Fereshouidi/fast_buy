'use client';
import { CSSProperties, useEffect, useRef, useState } from "react";
import Slide from "./slide/slide";

type sliderDataParams = {
    products: slideDataParams[] 
}
type slideDataParams = {
    name: string,
    images: string[]
}
const Slides = ({products}: sliderDataParams) => {

    // const list = [
    //     {
    //         tittle: 'the tittle',
    //         img: 'https://i.ytimg.com/vi/qBj4UPUIivQ/maxresdefault.jpg'
    //     },
    //     {
    //         tittle: 'the tittle',
    //         img: 'https://i.ytimg.com/vi/qBj4UPUIivQ/maxresdefault.jpg'
    //     },
    //     {
    //         tittle: 'the tittle',
    //         img: 'https://i.ytimg.com/vi/qBj4UPUIivQ/maxresdefault.jpg'
    //     },
    //     {
    //         tittle: 'the tittle',
    //         img: 'https://i.ytimg.com/vi/qBj4UPUIivQ/maxresdefault.jpg'
    //     },
    //     {
    //         tittle: 'the tittle',
    //         img: 'https://i.ytimg.com/vi/qBj4UPUIivQ/maxresdefault.jpg'
    //     },
    //     {
    //         tittle: 'the tittle',
    //         img: 'https://i.ytimg.com/vi/qBj4UPUIivQ/maxresdefault.jpg'
    //     },
    //     {
    //         tittle: 'the tittle',
    //         img: 'https://i.ytimg.com/vi/qBj4UPUIivQ/maxresdefault.jpg'
    //     },
    //     {
    //         tittle: 'the tittle',
    //         img: 'https://i.ytimg.com/vi/qBj4UPUIivQ/maxresdefault.jpg'
    //     },
    //     {
    //         tittle: 'the tittle',
    //         img: 'https://i.ytimg.com/vi/qBj4UPUIivQ/maxresdefault.jpg'
    //     },
    //     {
    //         tittle: 'the tittle',
    //         img: 'https://i.ytimg.com/vi/qBj4UPUIivQ/maxresdefault.jpg'
    //     },
    //     {
    //         tittle: 'the tittle',
    //         img: 'https://i.ytimg.com/vi/qBj4UPUIivQ/maxresdefault.jpg'
    //     },
    //     {
    //         tittle: 'the tittle',
    //         img: 'https://i.ytimg.com/vi/qBj4UPUIivQ/maxresdefault.jpg'
    //     },
    //     {
    //         tittle: 'the tittle',
    //         img: 'https://i.ytimg.com/vi/qBj4UPUIivQ/maxresdefault.jpg'
    //     }
    // ]

    const slidesRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const slideWidth = 90;
    const totalSlides = products? products.length /3 : 0;

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex(prevIndex => {
                const nextIndex = prevIndex + 1;
                if (nextIndex >= totalSlides) {
                    return 0; 
                }
                return nextIndex;
            });
        }, 5000);

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
            products && products.map((product, index) => {
                return <Slide 
                    key={index} 
                    productTittle={product.name} 
                    productImage={product.images[0]}
                />
            })
        } </div>
    )
}
export default Slides;