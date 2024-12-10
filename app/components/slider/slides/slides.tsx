'use client';
import { CSSProperties, useContext, useEffect, useRef, useState } from "react";
import Slide from "./slide/slide";
import { LanguageSelectorContext } from "@/app/contexts/LanguageSelectorContext";

type sliderDataParams = {
    tittle: languageParams;
    products: slideDataParams[];
    changingTime: number;
};

type slideDataParams = {
    name: languageParams;
    images: string[];
    imagePrincipal: string,
    startOfDiscount: Date,
    endOfDiscount: Date,
    discount: discountParams,
    discountSticker: string
    currencyType: string
};

type languageParams = {
    english: string,
    arabic: string
}

type discountParams = {
    createdAt: Date,
    discountSticker: string,
    newPrice: number,
    oldPrice: number,
    percentage: number,
    startOfDiscount: Date, 
    endOfDiscount: Date
};

const Slides = ({ slideBarData }: { slideBarData: sliderDataParams }) => {

    if(typeof window == 'undefined'){
        throw 'window is undefined !'
    }

    const languageSelectorContext = useContext(LanguageSelectorContext);

    const slidesRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const slideWidth = 90;
  //  alert(slideWidth)
    const totalSlides = slideBarData? 
        window.innerWidth > 800 ? slideBarData.products.length /6
        : window.innerWidth <= 800 && window.innerWidth >= 500 ? slideBarData.products.length /2
        : window.innerWidth < 500 ? slideBarData.products.length /2  
        : slideBarData.products.length /6 
        : 0;

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex(prevIndex => {
                let nextIndex = 0;
                if(window.innerWidth > 800){
                    nextIndex = prevIndex + 1/3
                } else if(window.innerWidth <= 800 && window.innerWidth >= 500){
                    nextIndex = prevIndex + 1/2
                }else{
                    nextIndex = prevIndex + 1
                }
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
            if(languageSelectorContext?.activeLanguage == 'arabic'){
                slidesRef.current.style.transform = `translateX(${currentIndex * slideWidth}vw)`;
            }else{
                slidesRef.current.style.transform = `translateX(-${currentIndex * slideWidth}vw)`;
            }
        }
    }, [currentIndex]);




    const style:CSSProperties = {
        width: '100%',
        height: 'auto',
        display: 'flex',
        transition: '0.5s',
        padding: 0,
        margin: 0
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