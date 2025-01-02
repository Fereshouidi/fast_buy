'use client';
import { CSSProperties, useContext, useRef } from 'react';
import { productParams } from "@/app/contexts/productSelectForShowing";
import PurchaseIcon from '@/app/svg/icons/purchase';
import { CompanyInformationContext } from '@/app/contexts/companyInformation';
import { LoadingIconContext } from '@/app/contexts/loadingIcon';
import { getCustomerById, putPurchaseInShoppingCart } from '@/app/crud';
import { CustomerDataContext } from '@/app/contexts/customerData';
import { useRouter } from 'next/navigation';
import { purchaseParams } from '@/app/contexts/purchaseData';
import { BannersContext } from '@/app/contexts/banners';
import { ActiveLanguageContext } from '@/app/contexts/activeLanguage';

type Params = {
    product: productParams | undefined,
    purchaseData: purchaseParams | undefined,
    productinShoppingCart: boolean,
    setProductinShoppingCart: (value: boolean) => void;
}
const PutInPurchaseBTN = ({product, purchaseData, productinShoppingCart, setProductinShoppingCart}: Params) => {

    const router = useRouter();
    
    const customer = useContext(CustomerDataContext);
    const activeLanguage = useContext(ActiveLanguageContext)?.activeLanguage;
    const primaryColor = useContext(CompanyInformationContext)?.primaryColor;
    const setLoadingIcon = useContext(LoadingIconContext)?.setExist;
    const setBannerExist = useContext(BannersContext)?.setPurchaseStatusBanner;
    const setBannerStatus = useContext(BannersContext)?.setPurchaseStatus;

    const btnRef = useRef<HTMLDivElement | null>(null)

    if(!setLoadingIcon || !setBannerStatus || !setBannerExist){
        return;
    }

    const handleClick = async() => {

        if(!product?.quantity || productinShoppingCart == true || productinShoppingCart == undefined){
            return;
        }

        
        setLoadingIcon(true)
        if(!btnRef.current){
          return;  
        }

        btnRef.current.style.backgroundColor = primaryColor || '';

        if(!customer){
            return router.push('/pages/register');
        }
        console.log(purchaseData, customer);

        if (purchaseData && customer) {
            await putPurchaseInShoppingCart(purchaseData?._id, customer._id);
            setProductinShoppingCart(true)
            const refreshAccount = await getCustomerById(purchaseData?.buyer);

            console.log('purchaseData......................................................');
            
            
            if(purchaseData && typeof window != 'undefined'){
                setLoadingIcon(false);
                setBannerStatus(201);
                setBannerExist(true);
                btnRef.current.style.backgroundColor = 'var(--black)';
                localStorage.setItem('customerData', JSON.stringify(refreshAccount))            
            }
        } else {
            console.log(purchaseData);
            
        }
        
    }
    
    const style: CSSProperties = {
        width: 'var(--long-width)',
        height: 'calc(var(--long-width) /4)',
        borderRadius: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'var(--large-margin)',
        backgroundColor: productinShoppingCart? 'var(--ashen-semi-transparent)' : 'var(--black)',
        color: 'var(--white)',
        opacity: product?.quantity? '1' : '0.3',
        cursor: 'pointer' 
    }
    const stylePrice: CSSProperties = {
        margin: 'var(--small-margin)', 
    }
    
    return (
        <div style={style} onClick={handleClick} ref={btnRef}>
            <PurchaseIcon/>
            <span style={stylePrice} id="put_in-purchase">
                {productinShoppingCart ? activeLanguage?.inPurchaseW : activeLanguage?.putInPurchase}
                    
            </span>
        </div>
    )
}
export default PutInPurchaseBTN;