'use client';

import { CSSProperties } from "react";
import ImagesSection from "./component/imagesSection/imagesSection";
import InformationSection from "./component/informationSection.tsx/informationSection";
import { productParams } from "@/app/contexts/productSelectForShowing";


const PageForPhone = ({product}: {product: productParams | undefined}) => {

    const style: CSSProperties = {
        backgroundColor: "var(--almost-white)",
        width: '100%',
        display: 'flex',
        justifyContent: "center",
        flexDirection: 'column'
    }
    return (
        <div id="the-product-detail-page-of-computer" style={style}>
            <ImagesSection product={product}/>
            <InformationSection product={product}/>
        </div>
    )
}
export default PageForPhone;