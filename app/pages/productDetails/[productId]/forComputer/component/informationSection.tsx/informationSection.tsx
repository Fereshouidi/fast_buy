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
import DiscountCode from "./component/discountCode";
import { shoppingCartParams } from "@/app/contexts/shoppingCart";


type Params = {
    product: productParams | undefined,
    setProduct: (value: productParams) => void
    shoppingCart: shoppingCartParams | undefined,
}
const InformationSection = ({product, setProduct, shoppingCart}: Params) => {

    const customer = useContext(CustomerDataContext);

    const [purchaseData, setPurchaseData] = useState<purchaseParams | undefined>(undefined);
    const [discountCodeAmount, setDiscountCodeAmount] = useState<{discount?: number | null, discountPercent?: number | null}>({discount: 0, discountPercent: 0});
    const [price, setPrice] = useState<number | undefined>(product?.discount? product.discount.newPrice : product?.price);
    const [productinShoppingCart, setProductinShoppingCart] = useState<boolean>(false);

   // console.log(shoppingCart?.products);

    useEffect(() => {
        if(purchaseData && price){
            setPurchaseData({
                ...purchaseData,
                totalPrice: price && purchaseData?.quantity ? price * purchaseData?.quantity : 0,
                discountCode: discountCodeAmount.discount || discountCodeAmount.discountPercent ? product?.discountCode?._id : null
            })
        }
    }, [price, purchaseData?.quantity, discountCodeAmount])

    useEffect(() => {
        if (shoppingCart?.products) {

            for (let index = 0 ; index < shoppingCart?.products?.length ; index++) {
                if (shoppingCart.products[index]._id == product?._id) {
                    setProductinShoppingCart(true);
                } else {
                    setProductinShoppingCart(false);
                }
            }

        }
    }, [shoppingCart])

    useEffect(() => {
            setPurchaseData({
                buyer: customer?._id, 
                product: product, 
                discount: product?.discount ? product.discount._id : null, 
                quantity: 1,
                totalPrice: product?.discount? product.discount.newPrice : product?.price,
                shoppingCart: customer?.ShoppingCart? customer.ShoppingCart._id : null,
                discountCode: discountCodeAmount.discount || discountCodeAmount.discountPercent ? product?.discountCode?._id : null
            })
        
    }, [product])

    const style: CSSProperties = {
        width: '50%',
        maxHeight: '100%',
        flexDirection: 'column',
        margin: 'var(--extra-large-margin)'
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
            {product?.discountCode? <DiscountCode 
                product={product} 
                setProduct={setProduct} 
                purchaseData={purchaseData} 
                setPurchaseData={setPurchaseData}
                discountCodeAmount={discountCodeAmount}
                setDiscountCodeAmount={setDiscountCodeAmount}
            /> : null } 
            <Price product={product} setProduct={setProduct} discountCodeAmount={discountCodeAmount} price={price} setPrice={setPrice} purchaseData={purchaseData} setPurchaseData={setPurchaseData}/>
            <PutInPurchaseBTN product={product} purchaseData={purchaseData} productinShoppingCart={productinShoppingCart} />
        </div>
    )
}
export default InformationSection;