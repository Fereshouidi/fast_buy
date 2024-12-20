'use client';
import english from '@/app/languages/english.json';
import arabic from '@/app/languages/arabic.json';
import { LanguageSelectorContext } from '@/app/contexts/LanguageSelectorContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { CSSProperties, useContext, useRef } from 'react';
import { CompanyInformationContext } from '@/app/contexts/companyInformation';
import { logIn } from '@/app/crud';
import { formParams } from '../loginForm';
import { BannersContext } from '@/app/contexts/banners';
import { useRouter } from 'next/navigation';
import { darken } from 'polished';
import { LoadingIconContext } from '@/app/contexts/loadingIcon';

const SubmateBTN = ({form}: {form: formParams}) => {
    
    const activeLanguage = useContext(LanguageSelectorContext)?.activeLanguage;
    const companyInformationContext = useContext(CompanyInformationContext)
    const bannersContext = useContext(BannersContext);
    const setLoadingIcon = useContext(LoadingIconContext)?.setExist;

    
    const router = useRouter();

    const btnRef = useRef<HTMLDivElement | null>(null);
    
    if(!setLoadingIcon){
        return;
    }
    


    const handleClick = async() => {

        if(btnRef.current){
            btnRef.current.style.backgroundColor = darken(0.1,  companyInformationContext?.primaryColor || '');
            setTimeout(() => {
                if (btnRef.current) {
                    btnRef.current.style.backgroundColor = companyInformationContext?.primaryColor || '';
                }
            }, 100);
        }
        setLoadingIcon(true);

        const customerData = await logIn(form.userName, form.password);

        if(customerData.status == 400){

            bannersContext?.setLoginStatusBanner(true);
            bannersContext?.setLoginStatus(400);
            setLoadingIcon(false);
            return;

        }if(customerData.status == 404){

            bannersContext?.setLoginStatusBanner(true);
            bannersContext?.setLoginStatus(404);
            setLoadingIcon(false);
            return;

        }else if(customerData.status == 401){

            bannersContext?.setLoginStatusBanner(true);
            bannersContext?.setLoginStatus(401);
            setLoadingIcon(false);
            return;

        }else if(customerData.data && companyInformationContext?.activateAccountWhileSignin && !customerData.data.verification){

            bannersContext?.setLoginStatusBanner(true);
            bannersContext?.setLoginStatus(0);
            localStorage.setItem('customerData', JSON.stringify(customerData.data));
            return;

        }

        
        localStorage.setItem('customerData', JSON.stringify(customerData.data));
        router.push('/');

        
    }



    const style: CSSProperties = {
        backgroundColor: companyInformationContext?.primaryColor
    }
    
    return (
        <div style={style} className='submate-btn' onClick={handleClick} ref={btnRef}>

            <FontAwesomeIcon icon={faRightToBracket}/>

            <span>{
                activeLanguage == 'english' ?
                    english.loginW
                : activeLanguage == 'arabic' ?
                    arabic.loginW
                : english.loginW
            }</span>

        </div>
    )
}
export default SubmateBTN