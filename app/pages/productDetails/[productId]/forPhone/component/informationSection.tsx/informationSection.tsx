'use client';

import { CSSProperties, useContext, useEffect, useState } from "react";
import Name from "./component/name";
import Description from "./component/discription";
import Categorie from "./component/categorie";
import Color from "./component/colors";
import Price from "./component/price";
import PutInPurchaseBTN from "./component/putInPurchaseBTN";
import Quantity from "./component/quantity";
import Size from "./component/size";
import TotalRating from "./component/totalRting";
import { productParams } from "@/app/contexts/productSelectForShowing";
import Availablity from "./component/availability";
import './style.css';
import { purchaseParams } from "@/app/contexts/purchaseData";
import { CustomerDataContext } from '@/app/contexts/customerData';




const InformationSection = ({product}: {product: productParams | undefined}) => {

    const customer = useContext(CustomerDataContext);

    const [purchaseData, setPurchaseData] = useState<purchaseParams | undefined>(undefined);
    

    useEffect(() => {
        
        if (customer && product) {
            setPurchaseData({
                buyer: customer._id, 
                product: product, 
                discount: product?.discount ? product.discount._id : null, 
                quantity: 1,
                totalPrice: product.discount? product.discount.newPrice  : product.price,
                shoppingCart: customer.ShoppingCart? customer.ShoppingCart._id : null
            })
        }
        
    }, [product])

    const style: CSSProperties = {
        width: '100%',
        maxHeight: '100%',
        flexDirection: 'column',
        padding: 'var(--extra-large-margin)',
        boxSizing: 'border-box',
    }
    const styleInputDiv: CSSProperties = {
        flexDirection: 'column',

    }
    
    return (
        <div id="information-section" style={style}>
            <Name product={product}/>
            <Description product={product}/>
            <div style={styleInputDiv}>
                <Availablity product={product}/>
                {product?.color? <Color product={product}/> : null}
                {product?.size? <Size product={product}/> : null}
                <Quantity product={product} purchaseData={purchaseData} setPurchaseData={setPurchaseData}/>
                <TotalRating product={product}/>
            </div>
            {product?.categorie? <Categorie product={product}/> : null}
            <Price product={product}/>
            <PutInPurchaseBTN product={product} purchaseData={purchaseData} />
        </div>
    )
}
export default InformationSection;