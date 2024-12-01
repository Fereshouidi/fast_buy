'use client';
import { CSSProperties } from "react";
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
        }
    ]

    const style:CSSProperties = {
        width: '100%',
        height: 'auto',
        display: 'flex'
    }
    return(
        <div style={style}> {
            list.map((product, index) => {
                return <Slide key={index} productTittle={product.tittle} productImage={product.img}/>
            })
        } </div>
    )
}
export default Slides;