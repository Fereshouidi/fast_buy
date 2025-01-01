'use client';
import { CSSProperties, useEffect, useState } from "react";
import ImagesSection from "./component/imagesSection/imagesSection";
import InformationSection from "./component/informationSection.tsx/informationSection";
import { productParams } from "@/app/contexts/productSelectForShowing";
import { shoppingCartParams } from "@/app/contexts/shoppingCart";
import { purchaseParams } from "@/app/contexts/purchaseData";

type Params = {
    product: productParams | undefined,
    setProduct: (value: productParams) => void,
    purchase?: purchaseParams | undefined
    setPurchase?: (value: purchaseParams | undefined) => void    
    shoppingCart: shoppingCartParams | undefined,
}
const PageForComputer = ({product, setProduct, shoppingCart}: Params) => {

    const [purchase, setPurchase] = useState<purchaseParams | undefined>(undefined);
   // const [purchaseData, setPurchaseData] = useState<purchaseParams | undefined>(undefined);

    
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
        minHeight: 'calc(100vh - var(--header-height)',
        display: 'flex',
        justifyContent: "center"
    }
    return (
        <div id="the-product-detail-page-of-computer" style={style}>
            <ImagesSection product={product} setProduct={setProduct} purchase={purchase} setPurchase={setPurchase} shoppingCart={shoppingCart}/>
            <InformationSection product={product} setProduct={setProduct} purchaseData={purchase} setPurchaseData={setPurchase} shoppingCart={shoppingCart}/>
        </div>
    )
}
export default PageForComputer;