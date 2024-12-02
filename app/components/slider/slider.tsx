'use client';
import { CSSProperties, useEffect, useState } from "react";
import Slides from "./slides/slides";
import { getSliserData } from "@/app/crud";

const Slider = () => {

    type sliderDataParams = {
        tittle: string,
        products: object[] ,
        changingTime: number
    }
    type slideDataParams = {
        name: string,
        images: string[]
    }
    const [sliderData, setSliderData] = useState<sliderDataParams>();
    const [slideData, setSlideData] = useState<slideDataParams[]>();

    useEffect(() => {
        const fetchData = async() => {
            const data = await getSliserData();
            setSliderData(data);
            setSlideData(data.products);
        }
        fetchData()
    }, [])

    const StyleSection:CSSProperties = {
        backgroundColor: 'var(--white)', 
        width: '100%', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        flexDirection: 'column',
        padding: 'calc(var(--extra-large-margin)*3) 0'
    }
    const styleDiv:CSSProperties = {
        width: '90vw',
        height: 'auto',
        overflowX: 'hidden',
        margin: 'calc(var(--large-margin)*3) 0',
        position: 'relative',
        borderRadius: '50px',
        backgroundColor: 'var(--white)',
    }
    
    return(
        <section style={StyleSection}>
            <h2>{sliderData?.tittle }</h2>
            <div style={styleDiv}> 
                {slideData && <Slides products={slideData}/>} 
            </div>
        </section>
        
    )
}
export default Slider;