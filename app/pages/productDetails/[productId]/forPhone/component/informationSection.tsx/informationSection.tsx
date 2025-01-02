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
import { addPurchase, getPurchasesByCustomerProduct, updatePurchase } from "@/app/crud";


type Params = {
    product: productParams | undefined,
    setProduct: (value: productParams ) => void
    purchaseData: purchaseParams | undefined
    setPurchaseData: (value: purchaseParams | undefined) => void
    shoppingCart: shoppingCartParams | undefined,
}
const InformationSection = ({product, setProduct, purchaseData, setPurchaseData, shoppingCart}: Params) => {

    const customer = useContext(CustomerDataContext);

    const [discountCodeAmount, setDiscountCodeAmount] = useState<{discount?: number | null, discountPercent?: number | null}>({discount: 0, discountPercent: 0});
    const [price, setPrice] = useState<number | undefined>(product?.discount? product.discount.newPrice : product?.price);
    const [productinShoppingCart, setProductinShoppingCart] = useState<boolean | undefined>(undefined);
    

    useEffect(() => {
        console.log('a');
        
        if(purchaseData && price){
            setPurchaseData({
                ...purchaseData,
                totalPrice: price && purchaseData?.quantity ? price * purchaseData?.quantity : 0,
                discountCode: discountCodeAmount.discount || discountCodeAmount.discountPercent ? product?.discountCode : null
            })
        }
    }, [price, purchaseData?.quantity, discountCodeAmount])

    useEffect(() => {
        if (shoppingCart?.products) {

            for (let index = 0 ; index < shoppingCart?.products?.length ; index++) {
                if (shoppingCart.products[index]._id == product?._id) {
                    setProductinShoppingCart(true);
                    return;
                } else {
                    setProductinShoppingCart(false);
                }
            }
        } else {
            setProductinShoppingCart(false);
        }
    }, [JSON.stringify(shoppingCart)])

    useEffect(() => {
        const getPurchase = async() => {

            if (customer && product ) {

                const purchaseFrom_DB = await getPurchasesByCustomerProduct(customer?._id, product?._id);

                if (purchaseFrom_DB && !purchaseData) {
                    console.log(purchaseFrom_DB);
                    setPurchaseData(purchaseFrom_DB);
                } else {

                    const purchaseData = await addPurchase({
                        buyer: customer?._id, 
                        product: product, 
                        discount: product?.discount ? product.discount._id : null, 
                        quantity: 1,
                        totalPrice: product?.discount? product.discount.newPrice : product?.price ? product?.price : 0,
                        discountCode: discountCodeAmount.discount || discountCodeAmount.discountPercent ? product?.discountCode?._id : null,
                        like: false
                    })
                    setPurchaseData(purchaseData.newPurchase);
                   // await updatePurchase(purchaseData.newPurchase)
                }
                
            }
        }
        console.log('d');
        
        getPurchase();
        
    }, [product])


    useEffect(() => {
        console.log('c');
    
        const fetchData = async () => {
            if (purchaseData) {
                const updatedPurchase = await updatePurchase(purchaseData);
                if (JSON.stringify(updatedPurchase) !== JSON.stringify(purchaseData)) {
                    setPurchaseData(updatedPurchase);
                }
            }
            
            console.log('updatedPurchase');
        };
        fetchData();
    }, [purchaseData]);
    


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
            {product?.discountCode? <DiscountCode 
                product={product} 
                setProduct={setProduct} 
                purchaseData={purchaseData} 
                setPurchaseData={setPurchaseData}
                discountCodeAmount={discountCodeAmount}
                setDiscountCodeAmount={setDiscountCodeAmount}
            /> : null } 
            <Price product={product} setProduct={setProduct} discountCodeAmount={discountCodeAmount} price={price} setPrice={setPrice} purchaseData={purchaseData} setPurchaseData={setPurchaseData}/>
            {productinShoppingCart != undefined  && <PutInPurchaseBTN product={product} purchaseData={purchaseData} productinShoppingCart={productinShoppingCart} setProductinShoppingCart={setProductinShoppingCart}/> }
        </div>
    )
}
export default InformationSection;