'use client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons/faMinus";
import { CompanyInformationContext } from "@/app/contexts/companyInformation";
import { shoppingCartParams } from "@/app/contexts/shoppingCart";
import { purchaseParams } from "@/app/contexts/purchaseData";
import { CSSProperties, useContext, useState } from "react";
import { updateQuantitiy } from "@/app/crud";

type params = {
    shoppingCart: shoppingCartParams | undefined
    setShoppingCart: (value: shoppingCartParams) => void;
    purchase: purchaseParams | undefined
}
const Quantity = ({shoppingCart, setShoppingCart, purchase}: params) => {

    const primaryColor = useContext(CompanyInformationContext)?.primaryColor;
    const [quantity, setQuantity] = useState(purchase?.quantity? purchase?.quantity : 2)

    const plusOne = async(event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
        event.stopPropagation();
        if(purchase?.product?.quantity && quantity < purchase?.product.quantity && shoppingCart?.totalPrice){
            setQuantity(quantity + 1)
            const updatedPurchase = {
                ...purchase,
                quantity: quantity + 1 ,
                totalPrice: purchase.product.discount ?
                    purchase.product.discount.newPrice * (quantity + 1 ) :
                    purchase.product.price * (quantity + 1 )
            }
            const updatedShoppingCart = {
                ...shoppingCart,
                purchases: shoppingCart?.purchases?.map(item =>
                    item._id === purchase._id ? updatedPurchase : item
                ) || [],
                totalPrice: purchase.product.discount ?
                    shoppingCart?.totalPrice + purchase.product.discount.newPrice :
                    shoppingCart?.totalPrice + purchase.product.price
            };
            setShoppingCart(updatedShoppingCart)
            await updateQuantitiy(purchase._id, quantity + 1)
        }
    }
    const minusOne = async(event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
        event.stopPropagation();
        if(purchase?.product?.quantity && purchase && quantity > 1 && shoppingCart?.totalPrice){
            setQuantity(quantity - 1)
            const updatedPurchase = {
                ...purchase,
                quantity: quantity - 1,
                totalPrice: purchase.product.discount ?
                    purchase.product.discount.newPrice * (quantity - 1 ) :
                    purchase.product.price * (quantity - 1 )
            }
            const updatedShoppingCart = {
                ...shoppingCart,
                purchases: shoppingCart?.purchases?.map(item =>
                    item._id === purchase._id ? updatedPurchase : item
                ) || [],
                totalPrice: purchase.product.discount ?
                    shoppingCart?.totalPrice - purchase.product.discount.newPrice :
                    shoppingCart?.totalPrice - purchase.product.price
            };
            setShoppingCart(updatedShoppingCart)
            await updateQuantitiy(purchase._id, quantity - 1);
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