'use client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons/faMinus";
import { CompanyInformationContext } from "@/app/contexts/companyInformation";
import { shoppingCartParams } from "@/app/contexts/shoppingCart";
import { purchaseParams } from "@/app/contexts/purchaseData";
import { CSSProperties, useContext, useState } from "react";
import { updateQuantitiy } from "@/app/crud";
import { log } from "util";

type params = {
    shoppingCart: shoppingCartParams | undefined
    setShoppingCart: (value: shoppingCartParams) => void;
    purchase: purchaseParams | undefined
}
const Quantity = ({shoppingCart, setShoppingCart, purchase}: params) => {

    const primaryColor = useContext(CompanyInformationContext)?.primaryColor;
    const [quantity, setQuantity] = useState(purchase?.quantity? purchase?.quantity : 1)


    const calcTotalPrice = (purchase: purchaseParams, quantity: number,  editType?: '+' | '-') => {
        const discountCode_discount = purchase.product?.discountCode?.discount ?? 0;
        const discountCode_percentage = purchase.product?.discountCode?.discountPercent ?? 0;
        

        if(editType === '+'){

            if(purchase.product?.discount){
                
                if(purchase.discountCode && purchase.product.discountCode?.discount) {                    
                    return (purchase.product.discount.newPrice - purchase.product.discountCode?.discount) * quantity
                
                } else if(purchase.discountCode && purchase.product.discountCode?.discountPercent) {
                    return (purchase.product.discount.newPrice - (purchase.product.discount.newPrice * (purchase.product.discountCode?.discountPercent / 100))) * quantity
                    
                }

                else {
                    return purchase.product.discount.newPrice * quantity;
                }

            }else{

                if(purchase.discountCode && purchase.product?.discountCode?.discount) {
                    return (purchase.product.price - purchase.product.discountCode?.discount) * quantity
                
                } else if(purchase.discountCode && purchase.product?.discountCode?.discountPercent) {
                    return (purchase.product.price - (purchase.product.price * (purchase.product.discountCode?.discountPercent / 100))) * quantity
                }

                else { 
                    return purchase?.product?.price ? purchase?.product?.price * quantity : undefined;
                }

            }

        }else if(editType === '-'){
            
            if(purchase.product?.discount){
                
                if(purchase.discountCode && purchase.product.discountCode?.discount) {
                    return (purchase.product.discount.newPrice - purchase.product.discountCode?.discount) * quantity
                
                } else if(purchase.discountCode && purchase.product.discountCode?.discountPercent) {
                    return (purchase.product.discount.newPrice - (purchase.product.discount.newPrice * (purchase.product.discountCode?.discountPercent / 100))) * quantity
                }

                else {
                    return purchase.product.discount.newPrice * quantity;
                }

            }else{

                if(purchase.discountCode && purchase.product?.discountCode?.discount) {
                    return (purchase.product.price - purchase.product.discountCode?.discount) * quantity
                
                } else if(purchase.discountCode && purchase.product?.discountCode?.discountPercent) {
                    return (purchase.product.price - (purchase.product.price * (purchase.product.discountCode?.discountPercent / 100))) * quantity
                }

                else {
                    return purchase?.product?.price ? purchase?.product?.price * quantity : undefined;
                }

            }
            
        }else {
            throw 'editType should be only " + " or " - " ';
        }
    }

    const getTotalPriceOfShoppingCart = (shoppingCart: shoppingCartParams) => {
        let totalPrice = 0;
            shoppingCart.purchases?.forEach(purchase => {
                totalPrice = purchase.totalPrice ? totalPrice + purchase.totalPrice : 0
            });
        return totalPrice;
    }
    const plusOne = async(event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
        event.stopPropagation();

        if(purchase?.product?.quantity && quantity < purchase?.product.quantity && shoppingCart?.totalPrice  ){
            setQuantity(quantity + 1)

            const updatedPurchase = {
                ...purchase,
                quantity: quantity + 1 ,
                totalPrice: calcTotalPrice(purchase, quantity + 1 ,'+')
            }            
            
            const updatedShoppingCart = {
                ...shoppingCart,
                purchases: shoppingCart?.purchases?.map(item =>
                    item._id === purchase._id ? updatedPurchase : item
                ) || [],
                totalPrice: (shoppingCart?.purchases || []).reduce((total, item) => {
                    const itemTotalPrice = item._id === purchase._id
                        ? updatedPurchase.totalPrice
                        : item.totalPrice || 0;
                    return itemTotalPrice ? total + itemTotalPrice : total
                }, 0),
            };
            
            
            setShoppingCart(updatedShoppingCart)
            await updateQuantitiy(updatedPurchase)
        }
    }

    const minusOne = async(event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
        event.stopPropagation();

        if(purchase?.product?.quantity && purchase && quantity > 1 && shoppingCart?.totalPrice){
            setQuantity(quantity - 1)

            const updatedPurchase = {
                ...purchase,
                quantity: quantity - 1,
                totalPrice: calcTotalPrice(purchase, quantity - 1 ,'-')

            }
            const updatedShoppingCart = {
                ...shoppingCart,
                purchases: shoppingCart?.purchases?.map(item =>
                    item._id === purchase._id ? updatedPurchase : item
                ) || [],
                totalPrice: (shoppingCart?.purchases || []).reduce((total, item) => {
                    const itemTotalPrice = item._id === purchase._id
                        ? updatedPurchase.totalPrice
                        : item.totalPrice || 0;
                    return itemTotalPrice ? total + itemTotalPrice : total
                }, 0),
            };

            setShoppingCart(updatedShoppingCart)            
            await updateQuantitiy(updatedPurchase);
        }
    }

    if(!shoppingCart || !purchase){
        return;
    }
    if(typeof window == 'undefined'){
        return;
    }

    const style: CSSProperties = {
        display: 'flex',
        alignItems: "center",
        justifyContent: 'center',
        fontSize: window.innerWidth > 1000 ? 'var(--primary-size)' : 'calc(var(--primary-size) / 1.7)',
        color: 'var(--black)',
        marginTop: 'var(--large-margin)'

    }
    const style_plus_minus: CSSProperties = {
        backgroundColor: primaryColor,
        color: 'white',
        padding: window.innerWidth > 1000 ? 'var(--small-padding)' : 'var(--small-padding)',
        margin: window.innerWidth > 1000 ? '0 var(--large-margin)' : '0 var(--medium-margin)',
        borderRadius: '10px',
        cursor: "pointer"
    }
    return (
        <div style={style}>
            <FontAwesomeIcon icon={faMinus} style={style_plus_minus} onClick={(event) => minusOne(event)}/>
            <span>{quantity}</span>
            <FontAwesomeIcon icon={faPlus} style={style_plus_minus} onClick={(event) => plusOne(event)}/>
        </div>
    )
}
export default Quantity;