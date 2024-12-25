'use client';
import { CSSProperties, useEffect } from "react";
import ImagesSection from "./component/imagesSection/imagesSection";
import InformationSection from "./component/informationSection.tsx/informationSection";
import { productParams } from "@/app/contexts/productSelectForShowing";

type Params = {
    product: productParams | undefined,
    setProduct: (value: productParams) => void
}
const PageForPhone = ({product, setProduct}: Params) => {
    
    useEffect(() => {
        console.log(product);
    }, [product])
    

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
            <InformationSection product={product} setProduct={setProduct}/>
        </div>
    )
}
export default PageForPhone;