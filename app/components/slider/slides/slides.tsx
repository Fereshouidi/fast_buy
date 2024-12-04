'use client';
import { CSSProperties, useEffect, useRef, useState } from "react";
import Slide from "./slide/slide";

type sliderDataParams = {
    tittle: string;
    products: slideDataParams[];
    changingTime: number;
};

type slideDataParams = {
    name: string;
    images: string[];
    startOfDiscount: Date,
    endOfDiscount: Date,
    discount: number,
    discountSticker: string

};

const Slides = ({ slideBarData }: { slideBarData: sliderDataParams }) => {

    const slidesRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const slideWidth = 90;
    const totalSlides = slideBarData? slideBarData.products.length /3 : 0;

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex(prevIndex => {
                const nextIndex = prevIndex + 1;
                if (nextIndex >= totalSlides) {
                    return 0; 
                }
                return nextIndex;
            });
        }, slideBarData.changingTime * 1000);

        if(slideBarData.changingTime == 0){
            clearInterval(intervalId);
        }

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
        padding: '0px 0'
    }
    return(
        <div style={style} ref={slidesRef}> {
            slideBarData.products && slideBarData.products.map((product, index) => {
                return <Slide 
                    key={index} 
                    product={product}
                />
            })
        } </div>
    )
}
export default Slides;