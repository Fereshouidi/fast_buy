'use client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { shoppingCartParams } from "@/app/contexts/shoppingCart";
import { ActiveLanguageContext } from "@/app/contexts/activeLanguage";
import { CSSProperties, useContext } from "react";
import { deletePurchaseById } from "@/app/crud";
import { purchaseParams } from "@/app/contexts/purchaseData";
import { LoadingIconContext } from "@/app/contexts/loadingIcon";
import { BannersContext } from "@/app/contexts/banners";

type params = {
    shoppingCart: shoppingCartParams | undefined
    setShoppingCart: (value: shoppingCartParams) => void;
    purchase: purchaseParams | undefined
}
const Trash = ({shoppingCart, setShoppingCart, purchase}: params) => {

    const setLoadingIcon = useContext(LoadingIconContext)?.setExist;
    const setBannerExist = useContext(BannersContext)?.setPurchaseStatusBanner;
    const setBannerStatus = useContext(BannersContext)?.setPurchaseStatus;    
    const activeLanguage = useContext(ActiveLanguageContext)?.activeLanguage;
    if(!setLoadingIcon || !setBannerStatus || !setBannerExist){
        return;
    }

    const deletePurchase = async () => {
        setLoadingIcon(true);
        const updatedCustomerData = await deletePurchaseById(purchase?._id);
        if(typeof window != 'undefined'){
            setLoadingIcon(false);
            setBannerStatus(201);
            setBannerExist(true);
            localStorage.setItem('customerData', JSON.stringify(updatedCustomerData))
               
            const updateShoppingCart = {
                ...shoppingCart,
                purchases: shoppingCart?.purchases?.filter(item => item !== purchase)
            };
            
            setShoppingCart(updateShoppingCart);
            
            
        }
    }

    if(typeof window == 'undefined'){
        return;
    }
    const style: CSSProperties = {
        color: 'red',
        fontSize: window.innerWidth > 800 ? 'var(--primary-size)' : 'var(--small-size)',
    }
    return (
        <div style={style} onClick={deletePurchase}>
            <FontAwesomeIcon icon={faTrash}/> {activeLanguage?.deleteW}
        </div>
    )
}
export default Trash;


