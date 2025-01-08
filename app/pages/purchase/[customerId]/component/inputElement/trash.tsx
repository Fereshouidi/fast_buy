'use client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { shoppingCartParams } from "@/app/contexts/shoppingCart";
import { ActiveLanguageContext } from "@/app/contexts/activeLanguage";
import { CSSProperties, useContext, useState } from "react";
import { deletePurchaseById } from "@/app/crud";
import { purchaseParams } from "@/app/contexts/purchaseData";
import { LoadingIconContext } from "@/app/contexts/loadingIcon";
import { BannerContext } from "@/app/contexts/bannerForEverything";

type params = {
    shoppingCart: shoppingCartParams | undefined
    setShoppingCart: (value: shoppingCartParams) => void;
    purchase: purchaseParams | undefined
}
const Trash = ({shoppingCart, setShoppingCart, purchase}: params) => {

    const setLoadingIcon = useContext(LoadingIconContext)?.setExist;   
    const activeLanguage = useContext(ActiveLanguageContext)?.activeLanguage;
    const setBanner = useContext(BannerContext)?.setBanner;
    const [iconColor, setIconColor] = useState<string>('red');

    if(!setLoadingIcon || !setBanner ){
        return;
    }

    const deletePurchase = async (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {

        event.stopPropagation();
        setIconColor('rgb(201, 1, 1)')
        setLoadingIcon(true);
        const updatedCustomerData = await deletePurchaseById(purchase?._id);

        if(typeof window != 'undefined' && shoppingCart?.totalPrice && purchase?.totalPrice){

            setLoadingIcon(false);

            setBanner(true, activeLanguage?.productRemovedFromShoppingCart, 'success');

            localStorage.setItem('customerData', JSON.stringify(updatedCustomerData))

            const updateShoppingCart = {
                ...shoppingCart,
                purchases: shoppingCart?.purchases?.filter(item => item !== purchase),
                totalPrice: shoppingCart?.totalPrice - purchase?.totalPrice
            };
            
            setShoppingCart(updateShoppingCart);
            
            
        }
    }

    if(typeof window == 'undefined'){
        return;
    }
    const style: CSSProperties = {
        color: iconColor,
        fontSize: window.innerWidth > 1000 ? 'var(--primary-size)' : 'var(--small-size)',
    }
    const styleIconDiv: CSSProperties = {
        display: 'flex',
    }
    const styleIcon: CSSProperties = {
        display: 'flex',
        color: iconColor,
        padding : 'var(--small-padding)',
        borderRadius: '50px',
        cursor: "pointer",

    }
    return (
        <div 
            className="icon trash" 
            style={style} 
        >
            <div style={styleIconDiv} >
                <p style={styleIcon} onClick={(event) => deletePurchase(event)}> <FontAwesomeIcon icon={faTrash}/> {activeLanguage?.deleteW}</p>
            </div>
        </div>
    )
}
export default Trash;


