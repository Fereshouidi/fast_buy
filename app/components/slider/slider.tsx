'use client';
import { CSSProperties, useEffect, useState } from "react";
import Slides from "./slides/slides";
import { getSliderData } from "@/app/crud";

const Slider = () => {

    type sliderDataParams = {
        tittle: string;
        products: slideDataParams[];
        changingTime: number;
    };
    
    type slideDataParams = {
        name: string;
        images: string[];
        imagePrincipal: string,
        startOfDiscount: Date,
        endOfDiscount: Date,
        discount: discountParams,
        discountSticker: string,
        currencyType: string
    };

    type discountParams = {
        createdAt: Date,
        discountSticker: string,
        newPrice: number,
        oldPrice: number,
        percentage: number,
        startOfDiscount: Date, 
        endOfDiscount: Date
    };
    
    const [sliderData, setSliderData] = useState<sliderDataParams>();

    useEffect(() => {
        const fetchData = async() => {
            const data = await getSliderData();
            setSliderData(data);
        }
        fetchData()
    }, [])

    const StyleSection:CSSProperties = {
        backgroundColor: 'var(--white)', 
        width: '100%', 
        height: 'auto',
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        flexDirection: 'column',
        padding: 0,
        paddingTop: 'calc(var(--extra-large-margin)*2)',
    }
    const styleDiv:CSSProperties = {
        width: '90vw',
        height: 'auto',
        overflowX: 'hidden',
     //   margin:  window.innerWidth > 800? 'calc(var(--extra-large-margin)*2) 0' : 'calc(var(--extra-large-margin)/2) 0',
        marginTop: 'var(--extra-large-margin)',
        position: 'relative',
        borderRadius: '25px',
        backgroundColor: 'var(--white)',
    }
    const styleH2: CSSProperties = {
        color: 'var(--black)',
    } 
    
    return(
        <section style={StyleSection}>
            <h2 style={styleH2}>{sliderData?.tittle }</h2>
            <div style={styleDiv}> 
                {sliderData && <Slides slideBarData={sliderData} />}
            </div>
        </section>
        
    )
}
export default Slider;