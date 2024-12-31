'use client';
import { CSSProperties, useEffect, useState } from "react";
import ImagesSection from "./component/imagesSection/imagesSection";
import InformationSection from "./component/informationSection.tsx/informationSection";
import { productParams } from "@/app/contexts/productSelectForShowing";
import { shoppingCartParams } from "@/app/contexts/shoppingCart";
import { purchaseParams } from "@/app/contexts/purchaseData";

type Params = {
    product: productParams | undefined,
    setProduct: (value: productParams) => void
    shoppingCart: shoppingCartParams | undefined,
}
const PageForPhone = ({product, setProduct, shoppingCart}: Params) => {
    

    const [purchase, setPurchase] = useState<purchaseParams | undefined>(undefined);
    
    useEffect(() => {
        if (shoppingCart?.purchases) {
            for (let i = 0 ; i < shoppingCart?.purchases?.length ; i++) {
                if (shoppingCart.purchases[i].product?._id == product?._id) {
                    setPurchase(shoppingCart.purchases[i]);
                }
            }
        }
        
    }, [shoppingCart])
    

    const style: CSSProperties = {
        backgroundColor: "var(--almost-white)",
        width: '100%',
        display: 'flex',
        justifyContent: "center",
        flexDirection: 'column'
    }
    return (
        <div id="the-product-detail-page-of-computer" style={style}>
            <ImagesSection product={product} setProduct={setProduct} purchase={purchase} shoppingCart={shoppingCart}/>
            <InformationSection product={product} setProduct={setProduct} shoppingCart={shoppingCart}/>
        </div>
    )
}
export default PageForPhone;