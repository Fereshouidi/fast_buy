'use client';
import { CSSProperties, useContext, useEffect, useState } from "react";
import ImagesSection from "./component/imagesSection/imagesSection";
import InformationSection from "./component/informationSection.tsx/informationSection";
import { productParams } from "@/app/contexts/productSelectForShowing";
import { shoppingCartParams } from "@/app/contexts/shoppingCart";
import { purchaseParams } from "@/app/contexts/purchaseData";
import { OrderParams } from "@/app/contexts/order";
import { CompanyInformationContext } from "@/app/contexts/companyInformation";

type Params = {
    product: productParams | undefined,
    setProduct: (value: productParams) => void,
    purchase?: purchaseParams | undefined
    setPurchase?: (value: purchaseParams | undefined) => void    
    shoppingCart: shoppingCartParams | undefined,
    orders: OrderParams[] | undefined
}
const PageForComputer = ({product, setProduct, shoppingCart, orders}: Params) => {

    const [purchase, setPurchase] = useState<purchaseParams | undefined>(undefined);
    const [isPriceChange, setIsPriceChange] = useState<boolean>(false);
    const companyInformations = useContext(CompanyInformationContext);

    
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
        backgroundColor: "var(--white-semi-transparent)",
        width: '100%',
        minHeight: 'calc(100vh - var(--header-height)',
        display: 'flex',
        justifyContent: "center",
        // backgroundImage: `url(${companyInformations.backgroundsPages?.homePage})`,
        // backgroundRepeat: 'no-repeat',
        // backgroundAttachment: 'fixed',
        // backgroundPosition: 'center',
        // backgroundSize: 'cover',
    

    }
    return (
        <div id="the-product-detail-page-of-computer" style={style}>
            <ImagesSection product={product} setProduct={setProduct} purchase={purchase} setPurchase={setPurchase} shoppingCart={shoppingCart}/>
            <InformationSection product={product} setProduct={setProduct} purchaseData={purchase} setPurchaseData={setPurchase} shoppingCart={shoppingCart} orders={orders} isPriceChange={isPriceChange} setIspriceChange={setIsPriceChange} />
        </div>
    )
}
export default PageForComputer;