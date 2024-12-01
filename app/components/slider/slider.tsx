'use client';
import { CSSProperties } from "react";
import Slides from "./slides/slides";

const Slider = () => {

    const style:CSSProperties = {
        width: '90vw',
        height: 'auto',
        overflowX: 'hidden',
        margin: 'calc(var(--extra-large-margin)*2) 0',
        position: 'relative',
    }
    return(
        <section style={style}> 
            <Slides/>
        </section>
    )
}
export default Slider;