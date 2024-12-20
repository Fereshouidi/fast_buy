'use client';
import englist from '@/app/languages/english.json';
import arabic from '@/app/languages/arabic.json';
import { LanguageSelectorContext } from "@/app/contexts/LanguageSelectorContext";
import { CSSProperties, useContext, useRef } from 'react';
import { productParams } from "@/app/contexts/productSelectForShowing";
import PurchaseIcon from '@/app/svg/icons/purchase';
import { CompanyInformationContext } from '@/app/contexts/companyInformation';
import { LoadingIconContext } from '@/app/contexts/loadingIcon';
import { addPurchase, getCustomerById } from '@/app/crud';
import { CustomerDataContext } from '@/app/contexts/customerData';
import { useRouter } from 'next/navigation';
import { purchaseParams } from '@/app/contexts/purchaseData';
import { BannersContext } from '@/app/contexts/banners';

type Params = {
    product: productParams | undefined,
    purchaseData: purchaseParams | undefined,
}
const PutInPurchaseBTN = ({product, purchaseData}: Params) => {

    const router = useRouter();
    
    const customer = useContext(CustomerDataContext);
    const languageSelectorContext = useContext(LanguageSelectorContext);
    const primaryColor = useContext(CompanyInformationContext)?.primaryColor;
    const setLoadingIcon = useContext(LoadingIconContext)?.setExist;
    const setBannerExist = useContext(BannersContext)?.setPurchaseStatusBanner;
    const setBannerStatus = useContext(BannersContext)?.setPurchaseStatus;

    const btnRef = useRef<HTMLDivElement | null>(null)

    if(!setLoadingIcon || !setBannerStatus || !setBannerExist){
        return;
    }

    const handleClick = async() => {

        if(!product?.quantity){
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
        const newPurchase = await addPurchase(purchaseData);
        const refreshAccount = await getCustomerById(newPurchase.newPurchase.buyer);
        console.log(refreshAccount)
        
        if(newPurchase && typeof window != 'undefined'){
            setLoadingIcon(false);
            setBannerStatus(201);
            setBannerExist(true);
            btnRef.current.style.backgroundColor = 'var(--black)';
            localStorage.setItem('customerData', JSON.stringify(refreshAccount))
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
        backgroundColor: 'var(--black)',
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
                {languageSelectorContext?.activeLanguage == 'englist' ? englist.putInPurchase 
                :languageSelectorContext?.activeLanguage == 'arabic' ? arabic.putInPurchase
                :englist.putInPurchase 
                }
            </span>
        </div>
    )
}
export default PutInPurchaseBTN;